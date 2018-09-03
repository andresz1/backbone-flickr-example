'use strict';

define(function(require) {
  var PictureModalView = require('views/picture-modal');
  var PicturesCollection = require('collections/pictures');
  var PictureModel = require('models/picture');

  describe('PictureModalView', function () {
    beforeEach(function() {
      var fixture = this.fixtures.picture;
      var picture = fixture.items[0];
      var next;

      this.title1 = fixture.data.title;
      this.title2 = 'title2';
      this.picture = new PictureModel(picture, { parse: true });

      this.pictures = new PicturesCollection();
      this.pictures.add(this.picture);

      next = new PictureModel(picture, { parse: true })
      next.set('title', this.title2);

      this.pictures.add(next);

      this.view = new PictureModalView({
        model: this.picture,
        collection: this.pictures
      });
      this.view.render();
    });

    it('should has content', function() {
      var node = $(this.view.el).find('.picture-modal__content');
      expect(node.text()).to.contain(this.title1);
    });

    it('should has image', function() {
      var node = $(this.view.el).find('.picture-modal__image');
      expect(node.attr('src')).to.equal(this.picture.get('media').m.replace('_m.', '.'));
    });

    it('should be removed on close', function() {
      var node = $(this.view.el).find('.picture-modal__close');
      var spy = sinon.spy(this.view, 'remove');

      node.trigger('click');

      sinon.assert.called(spy);
    });

    it('should change on next', function() {
      var node = $(this.view.el).find('.picture-modal__next');

      node.trigger('click');

      node = $(this.view.el).find('.picture-modal__content');

      expect(node.text()).to.contain(this.title2);
    });

    it('should change on back', function() {
      var node = $(this.view.el).find('.picture-modal__next');

      node.trigger('click');

      node = $(this.view.el).find('.picture-modal__content');

      expect(node.text()).to.contain(this.title2);
    });
  });
});

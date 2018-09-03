'use strict';

define(function(require) {
  var PictureItemView = require('views/picture-item');
  var PicturesCollection = require('collections/pictures');
  var PictureModel = require('models/picture');

  describe('PictureItemView', function () {
    beforeEach(function() {
      var fixture = this.fixtures.picture;

      this.author = fixture.data.author;
      this.title = fixture.data.title;
      this.taken = fixture.data.taken;
      this.picture = new PictureModel(fixture.items[0], { parse: true });

      this.pictures = new PicturesCollection();
      this.pictures.add(this.picture);

      this.view = new PictureItemView({
        model: this.picture,
        collection: this.pictures
      });
      this.view.render();
    });

    it('should has title', function() {
      var node = $(this.view.el).find('.picture-item__title');

      expect(node.text()).to.contain(this.title);
    });

    it('should has author', function() {
      var node = $(this.view.el).find('.picture-item__description > a');

      expect(node.text()).to.contain(this.author);
      expect(node.attr('href')).to.contain(this.picture.get('link'));
    });

    it('should has loader', function() {
      var node = $(this.view.el).find('.picture-item__loader > img');
      expect(!!node).to.equal(true);
    });

    it('should has image', function() {
      var node = $(this.view.el).find('.picture-item__image');
      expect(!!node).to.equal(true);
    });
  });
});

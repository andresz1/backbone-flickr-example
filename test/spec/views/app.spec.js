'use strict';

define(function(require) {
  var AppView = require('views/app');

  describe('AppView', function () {
    beforeEach(function() {
      this.view = new AppView();
    });

    it('should render on initialize', function() {
      expect(this.view.el.nodeName).to.equal('DIV');
    });

    it('should has title', function() {
      var node = $(this.view.el).find('.app__title');
      var title = 'Flickr\'s latest photos';

      expect(node.prop('tagName')).to.equal('H1');
      expect(node.text()).to.contain(title);
    });

    it('should has grid', function() {
      var node = $(this.view.el).find('#picture-grid');

      expect(!!node).to.equal(true);
    });
  });
});

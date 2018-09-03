'use strict';

define(function(require) {
  var PictureGridView = require('views/picture-grid');

  describe('PictureGridView', function () {
    beforeEach(function() {
      this.view = new PictureGridView();
    });

    it('should render on initialize', function() {
      expect(this.view.el.nodeName).to.equal('DIV');
    });

    it('should has pictures', function() {
      var node = $(this.view.el).find('#pictures');

      expect(node.prop('tagName')).to.equal('DIV');
    });
  });
});

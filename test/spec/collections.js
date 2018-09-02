'use strict';

define(function(require) {
  var PicturesCollection = require('collections/pictures');

  describe('Picture Collection', function () {
    var pictures = new PicturesCollection();

    it('should exist', function() {
      expect(pictures).to.exist;
    });

    it('should be an instance of Picture Collection', function () {
      expect(pictures).to.be.an.instanceof(PicturesCollection);
    });
  });
});

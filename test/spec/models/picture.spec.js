'use strict';

define(function(require) {
  var PictureModel = require('models/picture');

  describe('PictureModel', function () {
    beforeEach(function() {
      var fixture = this.fixtures.picture;

      this.author = fixture.data.author;
      this.title = fixture.data.title;
      this.taken = fixture.data.taken;
      this.picture = new PictureModel(fixture.items[0], { parse: true });
    });

    it('should exhibit attributes', function() {
      expect(this.picture.get('date_taken')).to.equal(this.taken);
    });

    it('should parse author', function () {
      expect(this.picture.get('author')).to.equal(this.author);
    });

    it('should parse media', function () {
      expect(this.picture.get('media').m.indexOf('_m.')).to.equal(-1);
    });

    it('should parse title', function () {
      expect(this.picture.get('title')).to.equal(this.title);
    });
  });
});

'use strict';

define(function(require) {
  var PicturesCollection = require('collections/pictures');

  describe('PicturesCollection', function () {
    beforeEach(function() {
      this.server = sinon.fakeServer.create();
      this.pictures = new PicturesCollection();
    });

    afterEach(function() {
      this.server.restore();
    });

    it('should make the correct request', function() {
      var url = '/test';

      this.pictures.fetch({ url: url });

      expect(this.server.requests.length).to.equal(1);
      expect(this.server.requests[0].method).to.equal('GET');
      expect(this.server.requests[0].url).to.equal(url);
    });

    it('should fetch and parse pictures', function () {
      var fixture = this.fixtures.picture;
      var url = '/test';
      var response = {
        items: fixture.items
      };

      this.server.respondWith('GET', url, [
        200,
        { 'Content-Type': 'application/json' },
        JSON.stringify(response),
      ]);

      this.pictures.fetch({ url: url });
      this.server.respond();

      var pictures = this.pictures.toJSON();

      expect(pictures.length).to.equal(response.items.length);
    });
  });
});

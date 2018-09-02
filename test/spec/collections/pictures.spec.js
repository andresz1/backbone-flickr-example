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

    it('should exist', function() {
      expect(this.pictures).to.exist;
    });

    it('should be an instance of the collection', function () {
      expect(this.pictures).to.be.an.instanceof(PicturesCollection);
    });

    it('should make the correct request', function() {
      var url = '/test';

      this.pictures.fetch({ url: url });

      expect(this.server.requests.length).to.equal(1);
      expect(this.server.requests[0].method).to.equal('GET');
      expect(this.server.requests[0].url).to.equal(url);
    });

    it('should fetch and parse pictures', function () {
      var url = '/test';
      var response = {
        title: 'title',
        items: [{
          title: 'title',
          link: "https:\/\/www.flickr.com\/photos\/tdqmtl\/30562046548\/",
          media: { m: 'https:\/\/farm2.staticflickr.com\/1885\/30562046548_c78fe6f7fb_m.jpg' },
          date_taken: '2018-09-02T09:39:24-08:00',
          description: 'description',
          published: '2018-09-02T18:29:02Z',
          author: 'nobody@flickr.com (\"author\")',
          tags: "tag1 tag2 tag3",
        }]
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

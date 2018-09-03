'use strict';

beforeEach(function() {
  var title = 'title';
  var author = 'author';
  var taken = '2018-09-02T09:39:24-08:00';

  this.fixtures = {
    picture: {
      data: {
        title: title,
        author: author,
        taken: taken,
      },
      items: [{
        title: title,
        link: "https:\/\/www.flickr.com\/photos\/tdqmtl\/30562046548\/",
        media: { m: 'https:\/\/farm2.staticflickr.com\/1885\/30562046548_c78fe6f7fb_m.jpg' },
        date_taken: taken,
        description: 'description',
        published: '2018-09-02T18:29:02Z',
        author: 'nobody@flickr.com (\"' + author + '\")',
        tags: 'tag1 tag2 tag3',
      }],
    }
  };
});

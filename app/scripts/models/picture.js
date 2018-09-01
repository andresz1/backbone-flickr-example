/*global define*/

define([
  'underscore',
  'backbone'
], function (_, Backbone) {
  'use strict';

  function parseTitle (title) {
    if (!title || !title.replace(' ', '').length) {
      return '-';
    }

    return title;
  }

  function parseAuthor (author) {
    if (!author) {
      return 'Anon'
    }

    var array = author.split(/\("|"\)/)

    if (array.length === 3) {
      try {
        return unescape(array[1])
      } catch (e) {
        return array[1]
      }
    } else {
      return author
    }
  }

  function parseMedia(media) {
    media.m = media.m.replace('_m.', '.');

    return media;
  }

  var PictureModel = Backbone.Model.extend({
    parse: function(response, options)  {
      response.title = parseTitle(response.title);
      response.author = parseAuthor(response.author);
      response.media = parseMedia(response.media);

      return response;
    }
  });

  return PictureModel;
});

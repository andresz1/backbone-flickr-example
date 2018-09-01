/*global define*/

define([
  'underscore',
  'backbone',
  'models/picture'
], function (_, Backbone, PictureModel) {
  'use strict';

  var PicturesCollection = Backbone.Collection.extend({
    model: PictureModel,

    url: 'https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?',

    parse: function(response) {
      return response.items;
    }
  });

  return PicturesCollection;
});

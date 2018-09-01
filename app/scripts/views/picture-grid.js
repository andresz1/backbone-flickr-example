/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/picture-item',
  'collections/pictures',
], function ($, _, Backbone, JST, PictureItemView, Pictures) {
  'use strict';

  var PictureGridView = Backbone.View.extend({
    template: JST['app/scripts/templates/picture-grid.ejs'],

    initialize: function () {
      _.bindAll(this, 'add');

      this.pictures = new Pictures();
      this.pictures.on('add', this.add);
      this.pictures.fetch();

      this.render();
    },

    add: function(picture) {
      var pictureItemView = new PictureItemView({
        model: picture,
        collection: this.pictures
      });

      this.$('#pictures').append(pictureItemView.render().el);
    },

    render: function () {
      this.$el.html(this.template());

      return this;
    }
  });

  return PictureGridView;
});

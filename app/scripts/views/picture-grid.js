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
      var self = this;

      _.bindAll(this, 'add');

      this.pictures = new Pictures();
      this.pictures.on('add', this.add);
      this.pictures.fetch({
        success: function() {
          self.loading(false);
        }
      });

      this.render();
    },

    /*
     * TODO
     * I decided to go with the add option because in the future could be
     * cool to have a infinite scroll. You can also watch for a reset with
     * the render method, and inside of it do a forEach :D.
     */
    add: function(picture) {
      var pictureItemView = new PictureItemView({
        model: picture,
        collection: this.pictures
      });

      this.$('#pictures').append(pictureItemView.render().el);
    },

    render: function() {
      this.$el.html(this.template());

      return this;
    },

    loading: function(value) {
      var display = (value) ? 'block' : 'none';

      this.$el.find('.picture-grid__loader').css({ display: display });
    }
  });

  return PictureGridView;
});

/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
  'views/picture-modal',
], function ($, _, Backbone, JST, PictureModalView) {
  'use strict';

  var PictureItemView = Backbone.View.extend({
    template: JST['app/scripts/templates/picture-item.ejs'],
    tagName: 'div',
    className: 'picture-item',

    events: {
      "click .picture-item__image": "preview",
    },

    styles: function () {
      return {
        'background-image': 'url(' + this.model.get('media').m + ')',
      };
    },

    initialize: function() {
      var self = this;
      var img = new Image();

      img.onload = function () {
        self.$el.find('.picture-item__image').css(self.styles());
        self.$el.find('.picture-item__loader').css({ display: 'none' });
      };

      img.src = this.model.get('media').m;
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    preview: function () {
      var pictureModalView = new PictureModalView({
        model: this.model,
        collection: this.collection,
      });

      $('body')[0].append(pictureModalView.render().el);
    }
  });

  return PictureItemView;
});

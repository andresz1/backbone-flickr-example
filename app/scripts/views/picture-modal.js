/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates'
], function ($, _, Backbone, JST) {
  'use strict';

  var PictureModalView = Backbone.View.extend({
    template: JST['app/scripts/templates/picture-modal.ejs'],

    events: {
      'click .picture-modal__close': 'close',
      'click .picture-modal__back': 'back',
      'click .picture-modal__next': 'next',
    },

    initialize: function () {
      _.bindAll(this, 'move');

      $(document).on('keydown', this.move);

      this.listenTo(this.model, 'change', this.render);
    },

    render: function () {
      this.$el.html(this.template(this.model.toJSON()));

      return this;
    },

    back: function () {
      var index = this.collection.indexOf(this.model) - 1;
      index = (index < 0) ? this.collection.length - 1 : index;

      this.model = this.collection.at(index);

      this.render();
    },

    next: function () {
      var index = this.collection.indexOf(this.model) + 1;
      index = index % this.collection.length;

      this.model = this.collection.at(index);

      this.render();
    },

    close: function () {
      this.remove();
    },

    move: function(e) {
      var code = e.keyCode || e.which;

      if (code === 37) {
        this.back();
      } else if (code === 39) {
        this.next();
      }
    },

    remove: function() {
      $(document).off('keydown', this.move);

      Backbone.View.prototype.remove.call(this);
    }
  });

  return PictureModalView;
});

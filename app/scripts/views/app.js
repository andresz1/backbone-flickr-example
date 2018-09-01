/*global define*/

define([
  'jquery',
  'underscore',
  'backbone',
  'templates',
	'views/picture-grid',
], function ($, _, Backbone, JST, PictureGridView) {
  'use strict';

  var AppView = Backbone.View.extend({
    template: JST['app/scripts/templates/app.ejs'],

    initialize: function () {
      _.bindAll(this);

      this.render();

      this.pictureGridView = new PictureGridView({ el: '#picture-grid' });
    },

    render: function () {
      this.$el.html(this.template());
    },
  });

  return AppView;
});

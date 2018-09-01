/*global require*/
'use strict';

require.config({
  shim: {
  },
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash'  }
});

require([
  'backbone',
  'views/app',
  'router/index',
], function (Backbone, AppView, Router) {
  new Router();

  Backbone.history.start();

  new AppView({ el: $('body')[0] });
});

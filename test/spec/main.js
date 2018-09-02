'use strict';

require.config({
  shim: {
  },
  baseUrl: 'scripts/',
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    backbone: '../bower_components/backbone/backbone',
    underscore: '../bower_components/lodash/dist/lodash'  }
});

require(['spec/collections.js'], function() {
  mocha.run();
});

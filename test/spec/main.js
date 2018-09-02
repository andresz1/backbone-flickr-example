/*global require*/
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

var tests = [
  'spec/collections/pictures.spec.js'
];

require(tests, function() {
  mocha.run();
});

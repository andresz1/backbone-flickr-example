# backbone-flikr-example [![Build Status](https://travis-ci.org/andresz1/backbone-flickr-example.svg?branch=master)](https://travis-ci.org/andresz1/backbone-flickr-example)
A simple project to learn [Backbone.js](http://backbonejs.org/) basics :ghost: using [RequireJS](https://requirejs.org/), [Underscore.js](https://underscorejs.org/) and [JQuery](https://jquery.com/). Live [here](http://backbone-flickr.com.s3-website-us-east-1.amazonaws.com/). Shows you the public Flickr feed, allowing you to view the images either in a lightbox or on Flickr's site.

## Features
- Responsive Flickr's latest photos with caption and owner
- Link to original photo post
- Responsive lightbox with all photo information (you can also change the photo with :arrow_left: and :arrow_right: keys)
- Asynchronous image load treatment
- Test automation

## Build
To develop and build this project you need to have installed [Node.js](https://nodejs.org/), and follow this steps.

Install [Grunt-CLI](http://gruntjs.com/) globally.

```bash
npm install -g grunt-cli
```

Install [Bower](https://bower.io/) globally.

```bash
npm install -g bower
```

Clone (or download and unzip) the project to your file system an go into the directory of the project.

```bash
cd backbone-flickr-example/
```

Install dependencies.

```bash
npm install
bower install
```

Run a local development server (livereload enabled).

```bash
grunt serve
```

Run defined tests using [Mocha](https://mochajs.org/), [Chai](http://www.chaijs.com/) and [Sinon](https://sinonjs.org/) and linting with [JSHint](http://jshint.com/).

```bash
grunt test
# or
grunt serve:test # Shows results in a fancy way
```

Package the app (minify html, css and js). The output will be in the `dist/` folder.

```bash
grunt build
```

## Feedback

Pull requests, feature ideas and bug reports are very welcome. We highly appreciate any feedback.

## License

MIT

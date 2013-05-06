# grunt-feo

> [Front-End Optimization](sideroad.secret.jp/articles/front-end-optimization-tool/)

## Getting Started
This plugin requires Grunt `~0.4.0`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-feo --save-dev
```

One the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-feo');
```

## The 'feo' task

### Overview
In your project's Gruntfile, add a section named `feo` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  feo: {
    options: {
      'js' : {
        'compressor' : 'yui-js',
        'ignore':[
          'ignore.js'
        ],
        'inline':true,
        'root' : 'examples/src'
      },
      'backgroundImage' : {
        'base64' : true
      },
      'css' : {
        'compressor' : 'yui-css',
        'ignore':['ignore.css'],
        'inline':true,
        'root' : 'examples/src'
      },
      'image' : {
        'base64' : true,
        'root' : 'examples/src'
      },
      'logLevel' : 1
    },
    example: {
      'example/src': ['example/dist']
    }
  },
})
```

### Options

See also [feo document](https://github.com/sideroad/feo).

## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
_(Nothing yet)_

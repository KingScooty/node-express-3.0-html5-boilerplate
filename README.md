Node Express 3.0 HTML5 Boilerplate
==================================

Introduction
------------

Boilerplate code for rocking fresh Node projects with `Express 3.0`, `Jade`, and `asset management` for compiling, concatenating and minifying `less` and `javascript` files.

Two development environments: `development` and `production`. Assets are concatenated, minified, hashed and cached in `production` and the `Jade` template files are updated in accordance.

Requirements
------------

This project uses a number of bits and bobs:

* [Node.js](http://nodejs.org/)
* [Express](http://expressjs.com/guide.html) Lightweight framework for Node
* [Jade](http://jade-lang.com/) Node templating language (bit like Haml)
* [Less](http://lesscss.org/) Node dynamic css language.
* [Connect Assets](https://github.com/TrevorBurnham/connect-assets) A Rails 3.1-style asset pipeline for Node.js

Install
-------

Install dependencies:

```
$ npm install -d
```


Run the app in `development` mode:

```
$ node app.js
```

To switch the environment to `production`, you can set the `NODE_ENV` environment variable:

```
$ NODE_ENV=production node app.js
```

License
-------
Node Express 3.0 HTML5 Boilerplate is licensed under the [Creative Commons Attribution-ShareAlike 3.0 Unported License](http://creativecommons.org/licenses/by-sa/3.0/).

Copyright 2012, [Scotty Vernon](http://kingscooty.com/) // [Wildflame Studios](http://wildflame.co.uk/)
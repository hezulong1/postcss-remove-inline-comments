# postcss-remove-inline-comments

<img align="right" width="95" height="95"
     title="Philosopher’s stone, logo of PostCSS"
     src="http://postcss.github.io/postcss/logo.svg">

A plugin to remove inline CSS comments from compilation. It Forked from [postcss-strip-inline-comments](https://github.com/mummybot/postcss-strip-inline-comments), Because there are some warnings in `postcss@8`.

```scss
/* This comment will remain */
// This comment will be removed
body {
  // This comment will also be removed
  background-color: black;
}
// And so will this one
```

## Usage

You need to have a compliant parser, currently either [postcss-scss](https://github.com/postcss/postcss-scss) or [sugarss](https://github.com/postcss/sugarss) already parsing your postcss for this plugin to work.

### Install

```npm install postcss-remove-inline-comments --save-dev```

### postcss.config.js

```js
module.exports = {
  parse: require('postcss-scss'),
  plugins: [
    require('postcss-remove-inline-comments')
  ]
}
```
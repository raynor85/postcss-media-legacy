# postcss-media-legacy [![Build Status](https://travis-ci.org/davidtheclark/postcss-simple-extend.svg?branch=master)](https://travis-ci.org/davidtheclark/postcss-simple-extend)

**A [PostCSS](https://github.com/postcss/postcss) plugin for Mobile First development that rewrites media queries for IE8 and below.**

Use this plugin with [Modernizr](http://modernizr.com/) or adding the class "lt-ie9" in your html element.

## Installation

```
npm install postcss-media-legacy --save
```

## Example Input-Output

Input:
```css
@media screen and (min-width:320px) {
    .show-xs {
        display: none
    }
}
```

Output:
```css
.lt-ie9 .show-xs {
    display: none;
}
@media screen and (min-width:320px) {
    .show-xs {
        display: none
    }
}
```

## Usage

### Plug it in to PostCSS

Plug it in just like any other PostCSS plugin. There are no options at the moment.

```js
postcss([ require('postcss-media-legacy') ])
```

Or take advantage of [any of the myriad other ways to consume PostCSS](https://github.com/postcss/postcss#usage), and follow the plugin instructions they provide.

'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-media-legacy', function mediaLegacy(options) {

    options = options || {};

    return function(css, result) {
        css.eachAtRule(function(atRule) {
            if(atRule.name === 'media') {
                atRule.nodes.forEach(function( node ) {
                    var clonedNode = node.clone();
                    clonedNode.selector = '.lt-ie9 ' + clonedNode.selector;
                    result.root.insertBefore( atRule, clonedNode );
                });
            }
        });
    };
});

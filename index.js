'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-media-legacy', function mediaLegacy(options) {

    options = options || {};

    return function(css, result) {
        css.eachAtRule(function(atRule) {
            if(atRule.name === 'media') {
                atRule.nodes.forEach(function( node ) {
                    var clonedNode = node.clone(),
                        clonedNodeArray = clonedNode.selector.split(',');

                    for (var i = 0; i < clonedNodeArray.length; i++) {
                        clonedNodeArray[i] = '.lt-ie9 ' + clonedNodeArray[i];
                    }
                    clonedNode.selector = clonedNodeArray.join(',');
                    console.log(clonedNode.selector);
                    result.root.insertBefore( atRule, clonedNode );
                });
            }
        });
    };
});

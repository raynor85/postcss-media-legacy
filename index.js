'use strict';

var postcss = require('postcss');

module.exports = postcss.plugin('postcss-media-legacy', function mediaLegacy(options) {

    options = options || {};

    return function(css, result) {
        css.walkAtRules(function(atRule) {
            if(atRule.name === 'media' && atRule.params !== 'print') {
                atRule.nodes.forEach(function( node ) {
                    if(node.type === 'rule') {
                        var clonedNode = node.clone(),
                            clonedNodeArray = clonedNode.selector.split(','),
                            selector = '.lt-ie9 ',
                            selectorLength = selector.length;

                        for (var i = 0; i < clonedNodeArray.length; i++) {
                            if(clonedNodeArray[i].substring(0, selectorLength) == selector) {
                                clonedNodeArray[i] = clonedNodeArray[i].substring(selectorLength);
                            }
                            clonedNodeArray[i] = selector + clonedNodeArray[i];
                        }
                        clonedNode.selector = clonedNodeArray.join(',');
                        result.root.insertBefore( atRule, clonedNode );
                    }
                });
            }
        });
    };
});
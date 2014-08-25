"use strict";

var getJSON = require('./get').getJSON;
var readAttributes = require('./read-attributes');
var createUrl = require('./create-url');
var buildHTML = require('./build-html');


var proto = Object.create( HTMLElement.prototype, {

    createdCallback: {
        value: function () { }
    },

    attachedCallback : {
        value: function () {
            readAttributes(this)
              .then(createUrl)
              .then(getJSON)
              .then(buildHTML.bind(this))
              .then(console.log.bind(console, this))
              .catch(console.error.bind(console))
        }
    },

    attributeChangedCallback : {
        value: function (attrName, oldVal, newVal) { }
    },

    detachedCallback : {
        value: function () { }
    }

});

module.exports = document.registerElement('football-panel', {
  prototype: proto
});

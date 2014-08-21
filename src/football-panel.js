"use strict";

var getJSON = require('./get-json');
var readAttributes = require('./read-attributes');
var createUrl = require('./create-url');
var buildHTML = require('./build-html');


var proto = Object.create( HTMLElement.prototype, {
    createdCallback: {
        value: function () {

            var element = this;


            // alternative 1 - cleaner syntax, but no way to know which template to use in buildHTML

            readAttributes(element)
              .then(createUrl)
              .then(getJSON)
              .then(buildHTML)
              .then(function(html) {
                element.innerHTML = html;
              })
              .then(console.log.bind(console, element))
              .catch(function(e) {
                console.error(e.message);
              })


            // alternative 2 - uglier syntax, but the attributes object is now available for the buildHTML function

            // readAttributes(this).then(function(response) {
            //
            //   return createUrl(response)
            //     .then(getJSON)
            //     .then(function(json) {
            //       return buildHTML(json, response)
            //     })
            //     .then(function(html) {
            //       element.innerHTML = html;
            //     })
            //     .then(console.log.bind(console, element))
            //     .catch(function(e) {
            //       throw new Error(e.message); // re-throw error to have error handling in same place
            //     })
            //
            // }).catch(function(e) {
            //   console.error(e.message);
            // });

        }
    },
    attributeChangedCallback : {
      value: function () {
        console.log('attribute changed');
      }
    }
});

module.exports = document.registerElement('football-panel', {
  prototype: proto
});

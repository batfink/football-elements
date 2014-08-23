"use strict";

var getJSON = require('./get').getJSON;
var readAttributes = require('./read-attributes');
var createUrl = require('./create-url');
var buildHTML = require('./build-html');


var proto = Object.create( HTMLElement.prototype, {
    createdCallback: {
        value: function () {

            var element = this;


            // alternative 1 - cleaner syntax, but no way to know which template to use in buildHTML

            // readAttributes(element)
            //   .then(createUrl)
            //   .then(getJSON)
            //   .then(buildHTML)
            //   .then(function(html) {
            //     element.innerHTML = html;
            //   })
            //   .then(console.log.bind(console, element))
            //   .catch(function(e) {
            //     console.error(e.message);
            //   })


            // alternative 2 - uglier syntax, but the attributes object is now available for the buildHTML function

            readAttributes(this).then(function(attributes) {

              return createUrl(attributes)
                .then(getJSON)
                .then(function(json) {
                    // console.log('json:', json);
                    return buildHTML(json, attributes)
                })
                .then(function(html) {
                  element.innerHTML = html;
                })
                // .then(console.log.bind(console, element))
                .catch(function(e) {
                  throw new Error(e); // re-throw error to have error handling in same place
                })

            }).catch(function(e) {
              console.error(e);
            });

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

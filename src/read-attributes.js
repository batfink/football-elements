'use strict';

var Promise = require('es6-promise').Promise;

function readAttributes(element) {

    return new Promise(function (resolve, reject) {
      try {

        var attributes = {};

        attributes.operation = element.getAttribute('operation');
        attributes.key = element.getAttribute('key');
        if (!!element.getAttribute('route')) {
          attributes.route = element.getAttribute('route');
        };

        if (!!attributes.operation && !!attributes.key) {
          resolve(attributes);
        } else {
          throw new Error('missing attributes');
        }

      } catch(e) {
        reject(e);
      }
    });

};

module.exports = readAttributes;

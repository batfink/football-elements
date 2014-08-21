"use strict";

module.exports = function(destination, source) {
  Object.keys(source.prototype).forEach(function(prop) {
    Object.defineProperty(destination, prop, Object.getOwnPropertyDescriptor(source.prototype, prop));
  })
};

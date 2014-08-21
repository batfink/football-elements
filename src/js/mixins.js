"use strict";

var mixins = function() {};

mixins.prototype = {
  sayHello: function () {
    console.log('msg:', this._msg);
  },
  get msg() {
    return this._msg;
  },
  set msg(msg) {
    this._msg = msg;
  }
};

module.exports = mixins;

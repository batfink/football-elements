window.mixins = function() {};

window.mixins.prototype = {
  someProp: 'test',
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

// extend function
window.extend = function(destination, source) {
  Object.keys(source.prototype).forEach(function(prop) {
    Object.defineProperty(destination, prop, Object.getOwnPropertyDescriptor(source.prototype, prop));
  })
};

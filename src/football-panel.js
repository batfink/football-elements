"use strict";

// var extend = require('./extend');
// var mixins = require('./mixins');

var template = require('./table.hbs');

var proto = Object.create( HTMLElement.prototype, {
    createdCallback: {
        value: function () {
            console.log('created');
            this.readAttributes();
            this.getJSON();
        }
    },
    readAttributes: {
      value: function () {
        this.operation = this.getAttribute('operation');
        if (!!this.getAttribute('route')) {
          this.route = this.getAttribute('route');
        }
        this.key = this.getAttribute('key');
      }
    },
    attributeChangedCallback : {
      value: function () {
        console.log('attribute changed');
      }
    },
    getJSON : {
      value: function () {

        var that = this, xhr = new XMLHttpRequest();

        xhr.open('GET', 'http://api.fotballdata.no/v1/' + this.operation + '/' + this.key + (!!this.route ? '/' + this.route : '') + '.json', true);

        xhr.onerror = function() {
            console.log('transfer failed');
        };

        xhr.onload = function() {
          that.buildHTML(JSON.parse(this.responseText));
        };

        xhr.ontimeout = function(){
          console.log('timeout');
        };

        xhr.send();

      }
    },
    buildHTML: {
      value: function (data) {

        this.innerHTML = template(data.Tournaments[0]);

        console.log(this, data.Tournaments[0]);

      }
    }
});



// var proto = Object.create(HTMLButtonElement.prototype, {
//   createdCallback: {
//     value: function () {
//       // extend this prototype with the mixins prototype
//       extend(proto, mixins);
//
//       // read attributes from html element
//       this.readAttributes();
//
//       // use the sayHello method from the mixin
//       this.addEventListener('click', this.sayHello);
//
//       // check what’s in the proto object
//       //console.log(proto);
//     }
//   },
//   readAttributes : {
//     value: function () {
//       // use the setter method to set the value of the msg property on the mixin prototype to the html-attribute of the custom element (see index.html)
//       this.msg = this.getAttribute('msg') || 'default message';
//     }
//   }
// });

module.exports = document.registerElement('football-panel', {
  prototype: proto
});

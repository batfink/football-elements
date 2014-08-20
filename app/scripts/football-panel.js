'use strict';

(function () {

    var proto = Object.create( HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                console.log('created');
                this.readAttributes();

                // console.log(this);

                var frag = document.createDocumentFragment();

                var div = document.createElement('div');

                var txt = document.createTextNode('here be dragons…');

                div.appendChild(txt);
                frag.appendChild(div);
                this.appendChild(frag);

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
            console.log(data);
          }
        }
    });

    window.FootballPanel = document.registerElement( 'football-panel', {
        prototype: proto
    });

})();

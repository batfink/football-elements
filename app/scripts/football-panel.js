'use strict';

(function () {

    var proto = Object.create( HTMLElement.prototype, {
        createdCallback: {
            value: function () {
                console.log('created');

                var frag = document.createDocumentFragment();

                var div = document.createElement('div');

                var txt = document.createTextNode('here be dragons…');

                div.appendChild(txt);
                frag.appendChild(div);
                this.appendChild(frag);

            }
        }
    });

    document.registerElement( 'football-panel', {
        prototype: proto
    });

})();

var Promise = require('es6-promise').Promise;

function get(url) {
    return new Promise(function(resolve, reject) {
        var req = new XMLHttpRequest();
        req.open('GET', url);

        req.onload = function() {
            if (req.status === 200) {
                resolve(req.response);
            } else {
                reject(Error(req.statusText));
            }
        }

        req.onerror = function() {
            reject(Error('Network error'))
        }

        req.send();
    })
};

function getJSON(url) {
    return get(url).then(JSON.parse);
};

module.exports.get = get;
module.exports.getJSON = getJSON;

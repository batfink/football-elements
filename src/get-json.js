var get = require('./get');

function getJSON(url) {
    return get(url).then(JSON.parse);
};

module.exports = getJSON;

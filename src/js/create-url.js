var Promise = require('es6-promise').Promise;

function createUrl(attributes) {
  return Promise.resolve('http://api.fotballdata.no/v1/' + attributes.operation + '/' + attributes.key + (!!attributes.route ? '/' + attributes.route : '') + '.json')
};

module.exports = createUrl;

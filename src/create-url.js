function createUrl(attributes) {
  return new Promise(function (resolve, reject) {
    resolve('http://api.fotballdata.no/v1/' + attributes.operation + '/' + attributes.key + (!!attributes.route ? '/' + attributes.route : '') + '.json')
  })        
};

module.exports = createUrl;

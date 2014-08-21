var template = require('./table.hbs');

function buildHTML(data, attributes) {
  // use attributes to determine template if alternative 2 is used in the football-panel module, else come up with something else
  console.log('build html:', data, attributes);
  return template(data.Tournaments[0]);
}

module.exports = buildHTML;

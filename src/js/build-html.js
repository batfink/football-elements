// var tables = require('../templates/tables.hbs');
// var matches = require('../templates/matches.hbs');
//

require('./format-date');


function buildHTML(data, attributes) {

    // console.log(Handlebars);

    var operation = attributes.operation,
        route = attributes.route,
        tableData;

        // console.log(route);

    var templates = {
        tables : require('../templates/tables.hbs'),
        matches : require('../templates/matches.hbs')
    };

    switch(route) {
        case 'tables':
            tableData = data.Tournaments[0];
            break;

        case 'matches':
            tableData = data.Matches;
            break;
    }

    // var template =

  // use attributes to determine template if alternative 2 is used in the football-panel module, else come up with something else
  // console.log('build html:', data, attributes);
  return templates[route](tableData);
}

module.exports = buildHTML;

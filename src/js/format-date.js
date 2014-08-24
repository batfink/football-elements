var handlebars = require('hbsfy/runtime');

function formatDate(date) {
    var d = date.match(/([0-9])+/)[0];
    return new Date(d);
};

module.exports = handlebars.registerHelper('formatDate', formatDate);

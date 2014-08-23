var handlebars = require('hbsfy/runtime');

function formatDate(date) {
    // console.log(typeof date);
    // var d =
    // var d = date.match(/([0-9-])+/)[0];
    // console.log(d typeof Number);
    // console.log(new Date(Number());
    return date;
};

module.exports = handlebars.registerHelper('formatDate', formatDate);

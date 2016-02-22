// Dependencies:
var commaSeparated = require('./index.js');

// Parsing:
var values = commaSeparated.parse(' a ,b,,d d ');

// Yields:
console.log('js', require('util').inspect(values));

// Compiling:
var value = commaSeparated.stringify(values);

// Yields:
console.log('js', require('util').inspect(value));

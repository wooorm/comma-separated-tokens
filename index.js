/**
 * @author Titus Wormer
 * @copyright 2016 Titus Wormer
 * @license MIT
 * @module comma-separated-tokens
 * @fileoverview Parse and stringify comma-separated tokens.
 */

'use strict';

/* Expose. */
exports.parse = parse;
exports.stringify = stringify;

/*
 * Dependencies.
 */

var trim = require('trim');

/*
 * Characters.
 */

var C_COMMA = ',';
var C_SPACE = ' ';

/*
 * Constants.
 */

var EMPTY = '';

/**
 * Parse comma-separated tokens to an array.
 *
 * @param {string} value - Attribute-value to parse.
 * @return {Array.<string>} - Tokens.
 */
function parse(value) {
  var values = [];
  var input = String(value || EMPTY);
  var index = input.indexOf(C_COMMA);
  var lastIndex = 0;
  var end = false;
  var val;

  while (!end) {
    if (index === -1) {
      index = input.length;
      end = true;
    }

    val = trim(input.slice(lastIndex, index));

    if (val || !end) {
      values.push(val);
    }

    lastIndex = index + 1;
    index = input.indexOf(C_COMMA, lastIndex);
  }

  return values;
}

/**
 * Compile an array to comma-separated tokens.
 *
 * @param {Array.<string>} values - Tokens.
 * @param {Object} [options={}] - Configuration.
 * @param {boolean} [options.padLeft=true] - Pad the left
 *   of a token with one space.
 * @param {boolean} [options.padRight=false] - Pad the right
 *   of a token with one space.
 * @return {string} - Comma-separated tokens.
 */
function stringify(values, options) {
  var settings = options || {};
  var left = settings.padLeft;

  /*
   * Ensure the last empty entry is seen.
   */

  if (values[values.length - 1] === EMPTY) {
    values = values.concat(EMPTY);
  }

  return trim(values.join(
    (settings.padRight ? C_SPACE : EMPTY) +
    C_COMMA +
    (left || left === undefined || left === null ? C_SPACE : EMPTY)
  ));
}

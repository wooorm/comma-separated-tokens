# comma-separated-tokens [![Build Status][build-badge]][build-page] [![Coverage Status][coverage-badge]][coverage-page]

Parse and stringify comma-separated tokens according to the [spec][].

## Installation

[npm][]:

```bash
npm install comma-separated-tokens
```

**comma-separated-tokens** is also available as an AMD, CommonJS, and
globals module, [uncompressed and compressed][releases].

## Usage

Dependencies:

```javascript
var commaSeparated = require('comma-separated-tokens');
```

Parsing:

```javascript
var values = commaSeparated.parse(' a ,b,,d d ');
```

Yields:

```js
[ 'a', 'b', '', 'd d' ]
```

Compiling:

```javascript
var value = commaSeparated.stringify(values);
```

Yields:

```js
'a, b, , d d'
```

## API

### `commaSeparated.parse(value)`

Parse comma-separated tokens to an array of strings, according to the [spec][].

*   `value` (`string`) — Comma-separated tokens.

**Returns**: `Array.<string>` — List of tokens.

### `commaSeparated.stringify(values[, options])`

Compile an array of strings to comma-separated tokens.
Handles empty items at start or end correctly.
Note that it’s not possible to specify initial or final
white-space per value.

*   `values` (`Array.<string>`) — List of tokens;

*   `options` (`Object`, optional):

    *   'padLeft' (`boolean`, default: `true`)
        — Whether to pad a space before a token;

    *   'padRight' (`boolean`, default: `false`)
        — Whether to pad a space after a token.

**Returns**: `string` — Comma-separated tokens.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definition -->

[build-badge]: https://img.shields.io/travis/wooorm/comma-separated-tokens.svg

[build-page]: https://travis-ci.org/wooorm/comma-separated-tokens

[coverage-badge]: https://img.shields.io/codecov/c/github/wooorm/comma-separated-tokens.svg

[coverage-page]: https://codecov.io/github/wooorm/comma-separated-tokens?branch=master

[npm]: https://docs.npmjs.com/cli/install

[releases]: https://github.com/wooorm/comma-separated-tokens/releases

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://html.spec.whatwg.org/#comma-separated-tokens

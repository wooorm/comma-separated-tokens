# comma-separated-tokens [![Build Status][travis-badge]][travis] [![Coverage Status][codecov-badge]][codecov]

<!--lint disable heading-increment list-item-spacing no-duplicate-headings-->

Parse and stringify comma-separated tokens according to the [spec][].

## Installation

[npm][npm-install]:

```bash
npm install comma-separated-tokens
```

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

Parse comma-separated tokens to an array of strings, according to the
[spec][].

###### Parameters

*   `value` (`string`) — Comma-separated tokens.

###### Returns

`Array.<string>` — List of tokens.

### `commaSeparated.stringify(values[, options])`

Compile an array of strings to comma-separated tokens.
Handles empty items at start or end correctly.
Note that it’s not possible to specify initial or final
white-space per value.

###### Parameters

*   `values` (`Array.<string>`) — List of tokens;
*   `options` (`Object`, optional):

    *   `padLeft` (`boolean`, default: `true`)
        — Whether to pad a space before a token;
    *   `padRight` (`boolean`, default: `false`)
        — Whether to pad a space after a token.

###### Returns

`string` — Comma-separated tokens.

## License

[MIT][license] © [Titus Wormer][author]

<!-- Definitions -->

[travis-badge]: https://img.shields.io/travis/wooorm/comma-separated-tokens.svg

[travis]: https://travis-ci.org/wooorm/comma-separated-tokens

[codecov-badge]: https://img.shields.io/codecov/c/github/wooorm/comma-separated-tokens.svg

[codecov]: https://codecov.io/github/wooorm/comma-separated-tokens

[npm-install]: https://docs.npmjs.com/cli/install

[license]: LICENSE

[author]: http://wooorm.com

[spec]: https://html.spec.whatwg.org/#comma-separated-tokens

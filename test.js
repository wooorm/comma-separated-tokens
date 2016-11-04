'use strict';

var test = require('tape');
var commaSeparated = require('./index.js');

test('comma-separated-tokens', function (t) {
  t.equal(
    typeof commaSeparated,
    'object',
    'should be an `object`'
  );

  t.test('.parse()', function (st) {
    st.equal(
      typeof commaSeparated.parse,
      'function',
      'should be a method'
    );

    st.deepEqual(
      commaSeparated.parse(),
      [],
      'should return an empty array for an empty value'
    );

    st.deepEqual(
      commaSeparated.parse(','),
      [''],
      'should return one empty entry for a single comma'
    );

    st.deepEqual(
      commaSeparated.parse(',,'),
      ['', ''],
      'should return two empty entry for a two comma’s'
    );

    st.deepEqual(
      commaSeparated.parse(' a ,b,,d d '),
      ['a', 'b', '', 'd d'],
      'should work'
    );

    st.end();
  });

  t.test('.stringify()', function (st) {
    st.equal(
      typeof commaSeparated.stringify,
      'function',
      'should be a method'
    );

    st.deepEqual(
      commaSeparated.stringify([]),
      '',
      'should return an empty string for an empty array'
    );

    st.deepEqual(
      commaSeparated.stringify(['']),
      ',',
      'should return a single comma for an empty entry'
    );

    st.deepEqual(
      commaSeparated.stringify(['', '']),
      ', ,',
      'should return two comma’s for two empty entries'
    );

    st.deepEqual(
      commaSeparated.stringify(['', 'foo']),
      ', foo',
      'should add an initial comma'
    );

    st.deepEqual(
      commaSeparated.stringify(['foo', '']),
      'foo, ,',
      'should add a final comma'
    );

    st.deepEqual(
      commaSeparated.stringify(['a', 'b', '', 'd d']),
      'a, b, , d d',
      'should work'
    );

    st.deepEqual(
      commaSeparated.stringify(['a', 'b', '', 'd d'], {
        padRight: true,
        padLeft: false
      }),
      'a ,b , ,d d',
      'should accept padding'
    );

    st.end();
  });

  t.end();
});

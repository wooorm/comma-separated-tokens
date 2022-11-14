import assert from 'node:assert/strict'
import test from 'node:test'
import {parse, stringify} from './index.js'

test('comma-separated-tokens', async function (t) {
  await t.test('.parse()', function () {
    assert.deepEqual(
      // @ts-expect-error runtime.
      parse(),
      [],
      'should return an empty array for an empty value'
    )

    assert.deepEqual(
      parse(','),
      [''],
      'should return one empty entry for a single comma'
    )

    assert.deepEqual(
      parse(',,'),
      ['', ''],
      'should return two empty entry for a two comma’s'
    )

    assert.deepEqual(parse(' a ,b,,d d '), ['a', 'b', '', 'd d'], 'should work')
  })

  await t.test('.stringify()', function () {
    assert.deepEqual(
      stringify([]),
      '',
      'should return an empty string for an empty array'
    )

    assert.deepEqual(
      stringify(['']),
      ',',
      'should return a single comma for an empty entry'
    )

    assert.deepEqual(
      stringify(['', '']),
      ', ,',
      'should return two comma’s for two empty entries'
    )

    assert.deepEqual(
      stringify(['', 'foo']),
      ', foo',
      'should add an initial comma'
    )

    assert.deepEqual(
      stringify(['foo', '']),
      'foo, ,',
      'should add a final comma'
    )

    assert.deepEqual(
      stringify(['a', 'b', '', 'd d']),
      'a, b, , d d',
      'should work'
    )

    assert.deepEqual(
      stringify(['a', 'b', '', 'd d'], {
        padRight: true,
        padLeft: false
      }),
      'a ,b , ,d d',
      'should accept padding'
    )
  })
})

import test from 'tape'
import {parse, stringify} from './index.js'

test('comma-separated-tokens', function (t) {
  t.test('.parse()', function (st) {
    st.equal(typeof parse, 'function', 'should be a method')

    st.deepEqual(parse(), [], 'should return an empty array for an empty value')

    st.deepEqual(
      parse(','),
      [''],
      'should return one empty entry for a single comma'
    )

    st.deepEqual(
      parse(',,'),
      ['', ''],
      'should return two empty entry for a two comma’s'
    )

    st.deepEqual(parse(' a ,b,,d d '), ['a', 'b', '', 'd d'], 'should work')

    st.end()
  })

  t.test('.stringify()', function (st) {
    st.equal(typeof stringify, 'function', 'should be a method')

    st.deepEqual(
      stringify([]),
      '',
      'should return an empty string for an empty array'
    )

    st.deepEqual(
      stringify(['']),
      ',',
      'should return a single comma for an empty entry'
    )

    st.deepEqual(
      stringify(['', '']),
      ', ,',
      'should return two comma’s for two empty entries'
    )

    st.deepEqual(stringify(['', 'foo']), ', foo', 'should add an initial comma')

    st.deepEqual(stringify(['foo', '']), 'foo, ,', 'should add a final comma')

    st.deepEqual(stringify(['a', 'b', '', 'd d']), 'a, b, , d d', 'should work')

    st.deepEqual(
      stringify(['a', 'b', '', 'd d'], {
        padRight: true,
        padLeft: false
      }),
      'a ,b , ,d d',
      'should accept padding'
    )

    st.end()
  })

  t.end()
})

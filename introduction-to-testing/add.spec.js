const assert = require('assert');
const add = require('./add');

const result = add(1, 3);

const expected = 4;

// basic assertion
// if (result == expected) {
//   console.log('tests pass.');
// } else {
//   throw new Error('Expected 1 + 3 to equal 4.');
// }

assert.equal(result, expected);

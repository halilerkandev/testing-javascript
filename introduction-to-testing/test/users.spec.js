const assert = require('assert');
const { findUserByEmail, findUserById } = require('../users');

describe('The findUserByEmail function', () => {
  it('finds a user by email', done => {
    findUserByEmail('Shanna@melissa.tv').then(response => {
      assert.equal(response.message, 'User found successfully.');
      done();
    });
  });

  it('finds a user by email (Using the return promise method)', () => {
    return findUserByEmail('Shanna@melissa.tv').then(response => {
      assert.equal(response.message, 'User found successfully.');
    });
  });

  it('finds a user by email (Using async/await)', async () => {
    const response = await findUserByEmail('Shanna@melissa.tv');

    assert.equal(response.message, 'User found successfully.');
  });
});

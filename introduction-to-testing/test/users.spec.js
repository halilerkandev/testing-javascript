const { findUserByEmail, findUserById } = require('../users');

describe('The findUserByEmail function', () => {
  it('finds a user by email', done => {
    findUserByEmail('Shanna@melissa.tv').then(response => {
      expect(response.message).toEqual('User found successfully.');
      done();
    });
  });

  it('finds a user by email (Using the return promise method)', () => {
    return findUserByEmail('Shanna@melissa.tv').then(response => {
      expect(response.message).toEqual('User found successfully.');
    });
  });

  it('finds a user by email (Using async/await)', async () => {
    const response = await findUserByEmail('Shanna@melissa.tv');

    expect(response.message).toEqual('User found successfully.');
  });

  it('rejects with error if user with email was not found.', () => {
    const actual = findUserByEmail('x@y.com');

    expect(actual).rejects.toEqual(
      new Error('User with email: x@y.com was not found.')
    );
  });
});

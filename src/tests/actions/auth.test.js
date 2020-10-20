import { login, logout } from '../../actions/auth';

describe('Testing Auth Action Generators...', () => {
  test('testing login...', () => {
    const result = login('123abc');
    expect(result).toHaveProperty('type', 'LOGIN');
    expect(result).toHaveProperty('uid', '123abc');
  });

  test('testing logout...', () => {
    const result = logout();
    expect(result).toHaveProperty('type', 'LOGOUT');
  });
});

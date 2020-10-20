import authReducer from '../../reducers/auth';

describe('Testing Auth Reducer...', () => {
  test('should process login action...', async() => {
    const action = { type: 'LOGIN', uid: '123ABC' };
    const state = authReducer({}, action);
    expect(state).toHaveProperty('uid', '123ABC');
  });

  test('should process logout action...', async() => {
    const action = { type: 'LOGOUT' };
    const state = authReducer({ uid: '123ABC' }, action);
    expect(state).toEqual({});
  });
});


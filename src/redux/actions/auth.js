import * as types from './types';

const signupAction = (payload) => ({
  type: types.SIGNUP_USER,
  payload
});

export default signupAction;

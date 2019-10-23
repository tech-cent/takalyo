import * as types from './types';

const verifyAction = (payload) => ({
  type: types.VERIFY_USER,
  payload
});

export default verifyAction;

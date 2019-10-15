import * as types from './types';

const errorOccured = (payload) => ({
  type: types.ERROR_OCCURRED,
  payload
});

export default errorOccured;

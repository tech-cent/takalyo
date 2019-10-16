import * as types from '../actions/types';

const initialState = {
  payload: null,
  error: null
};

const verifyReducer = (state=initialState, action) => {
  switch(action.type) {
  case types.VERIFY_USER:
    return {
      ...state,
      payload: action.payload,
      error: null
    };
  case types.ERROR_OCCURRED:
    return {
      ...state,
      payload: null,
      error: action.error
    };
  default:
    return state;
  }
};

export default verifyReducer;

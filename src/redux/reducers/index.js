import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import verifyReducer from './VerifyReducer';

const rootReducer = () => combineReducers({
  authReducer,
  verifyReducer
});

export default rootReducer;

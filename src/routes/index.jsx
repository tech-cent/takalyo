import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Home from '../components/home';
import LoginView from '../containers/login';
import SignupView from '../containers/signup';
import VerificationView from '../containers/verify';
import VerificationSuccess from '../containers/verifySuccess';

const store = configureStore();

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} exact/>
          <Route path="/login" component={LoginView}/>
          <Route path="/signup" component={SignupView}/>
          <Route path="/verify" component={VerificationView}/>
          <Route path="/verify-success" component={VerificationSuccess}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;


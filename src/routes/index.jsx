import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';
import Home from '../components/home';
import LoginView from '../containers/login';
import SignupView from '../containers/signup';

const store = configureStore();

const Routes = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/home" component={Home} exact/>
          <Route path="/login" component={LoginView}/>
          <Route path="/signup" component={SignupView}/>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
};

export default Routes;


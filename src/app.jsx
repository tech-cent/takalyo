import React from 'react';
import './assets/styles/app.scss';
import Routes from './routes';

// eslint-disable-next-line react/prop-types
const App = () => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
};

export default App;

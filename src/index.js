import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const title = 'Taka Lyo App'

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);

module.hot.accept();

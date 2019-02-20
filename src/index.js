import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import './scss/bootstrap.scss';
import './scss/style.scss';
import './scss/custom.scss';


ReactDOM.render(
  <App />,
  document.getElementById('app')
);

module.hot.accept();
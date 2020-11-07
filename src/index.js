import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import {BrowserRouter as Router,Switch,Route } from 'react-router-dom'; 
  const Root = () =>(
      <App/>
  );

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();

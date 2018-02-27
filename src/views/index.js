import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import configureStore from './configure-store.js';
import Home from './components/home';
import PageNotFound from './components/pageNotFound';
import Navbar from './components/navbar';

import './index.css';

const store = configureStore();
ReactDOM.render(

  <Provider store={store}>
    <BrowserRouter>
      <div className='app'>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/' component={PageNotFound} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

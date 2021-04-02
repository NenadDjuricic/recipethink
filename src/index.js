import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router/Router';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import allReducers from './store/reducers';

const store = createStore(allReducers, applyMiddleware(thunk));


ReactDOM.render( 
  <Provider store={store}>
  <Router />
</Provider>,
  document.getElementById('root')
);


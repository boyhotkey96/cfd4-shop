import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { combineReducers, createStore, compose } from 'redux';

export default function AppProvider({ children, reducers = {} }) {
  let store;

  if (!store) {
    reducers = combineReducers(reducers);
    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    store = createStore(reducers, composeEnhancers())
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}

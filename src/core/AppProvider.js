import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

export default function AppProvider({ children, reducers = {}, saga }) {
  let store;

  let thunkFake = store => next => action => {
    if (typeof action === 'function') {
      return action(store.dispatch, store.getState);
    } else {
      return next(action);
    }
  }

  if (!store) {
    reducers = combineReducers(reducers);

    const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
    const sagaMiddleware = createSagaMiddleware()

    store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware, thunkFake)));

    sagaMiddleware.run(saga);
  }

  return (
    <Provider store={store}>
      <BrowserRouter>
        {children}
      </BrowserRouter>
    </Provider>
  )
}
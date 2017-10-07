import React, { Component } from 'react';
import { render } from 'react-dom';
import reduxDialog, { dialog, openDialog, closeDialog } from '../src';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const reducers = {
  dialog
}

const reducer = combineReducers(reducers);
const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const BasicDialog = ({ test, asd }) => (
  <div>
    <div className="dlg--body">
      My awesome modalbox {test} {asd}!
    </div>
  </div>
)

const Dialog = reduxDialog({
  name: 'signupDialog'
})(BasicDialog);

const App = () => (
  <Provider store={store}>
    <div>
      <Dialog contentLabel='Dialog' asd={1} />
      <a onClick={() => store.dispatch(openDialog('signupDialog', { test: 1 }))} href="#">Open Dialog</a>
    </div>
  </Provider>
)

render(<App />,
  document.getElementById('react-js'));

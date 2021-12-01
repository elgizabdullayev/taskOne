import React from 'react';
import { store } from './store';
import App from './app/index';
import { Provider } from 'react-redux'

const Root = () => {
  
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Root;


import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

test('loads modules absolutely with baseUrl', () => {
  const div = document.createElement('div');
  return new Promise(resolve => {
    ReactDOM.render(<App onReady={resolve} />, div);
  });
});
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import store from 'reduxUtils/store';
import App from './App';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding:20px;
    font-family:'Raleway',Calibri,sans-serif;
    font-size:16px;
    background: linear-gradient(to right, #0f0c29, #302b63, #0f0c29);
  }
`;

ReactDOM.render(
  <React.Fragment>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.Fragment>,
  document.getElementById('root')
);

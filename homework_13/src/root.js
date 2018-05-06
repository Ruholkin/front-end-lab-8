import React from 'react';
import ReactDOM from 'react-dom';

// Add index.scss file as dependency to handle with webpack loader
import './index.scss';

// import App from './app';
import App from './features/app';

// Append application to the DOM
ReactDOM.render(
  <App />, // The application container
  document.querySelector("#root") // The container which hold the application
);
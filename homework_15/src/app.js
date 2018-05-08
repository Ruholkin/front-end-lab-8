import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

import App_ from './features/app';

class App extends Component {
  render() {
    return (
      <App_ />
    );
  }
}

export default hot(module)(App);
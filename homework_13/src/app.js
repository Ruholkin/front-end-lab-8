import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <div>Who-ho! It works!</div>
    );
  }
}

// Note: Hot reloading occurs after you save file in the editor.
export default hot(module)(App);
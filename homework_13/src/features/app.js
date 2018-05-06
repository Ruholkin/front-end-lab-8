import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

class App extends Component {
  render() {
    return (
      <span className='material-icons' style={{color: 'blue', 'font-size': '16px'}} >cancel</span>
    );
  }
}

export default hot(module)(App);
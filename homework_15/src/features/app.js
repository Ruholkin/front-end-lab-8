import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

import ColorBlocks from './colorBlocks';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      colors: {}
    };
  }

  componentDidMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            colors: result
          });
        },
        (error) => {
          this.setState({
            colors: 0
          });
        }
      )
  }

  render() {
  	
		return (
      <ColorBlocks colors={this.state.colors} />
		);
  }
}

export default hot(module)(App);
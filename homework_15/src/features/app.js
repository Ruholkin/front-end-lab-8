import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

import ColorBlocks from './colorBlocks';
import SearchBar from './searchBar';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      colors: {},
      displayedColors: [],
      searchValue: '',
      pickedColors: []
    },
    this.filteredColors = [];
  }

  componentWillMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            colors: result,
            displayedColors: result
          });
        },
        (error) => {
          this.setState({
            colors: 0,
            displayedColors: 0
          });
        }
      )
  }

  componentDidMount() {
    this.setState({ displayedColors: this.filteredColors })
  }

  bubbleSort(value_a, value_b){
    if( value_a.id > value_b.id){
      return true;
    }
    return false;
  }

  liveSearch(evt){
    let displayed = this.state.colors.filter( el => {
      let searchValue = el.tags.join(' ');
      return searchValue.indexOf(evt.target.value.toLowerCase()) !== -1;
    });

    this.filteredColors = displayed;
    this.setState({ 
      displayedColors: this.filteredColors,
      searchValue: evt.target.value.toLowerCase()
    })
  }

  sortColors(){

  }

  render() {
  	
		return (
      <div className='container'>
        <SearchBar onchange={this.liveSearch.bind(this)}/>
        <ColorBlocks colors={this.state.displayedColors} />
      </div>
		);
  }
}

export default App;
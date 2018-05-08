import React, { Component } from 'react';
// This plugin automatically reload page on changes
import { hot } from 'react-hot-loader';

import ColorsInfo from './colorsInfo';
import SearchBar from './searchBar';
import ColorBlocks from './colorBlocks';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      colors: [],
      displayedColors: [],
      searchValue: '',
      pickedColors: []
    },
    this.filteredColors = [];

    this.addColor = this.addColor.bind(this);
  }

  componentWillMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            colors: Array.from(result),
            displayedColors: Array.from(result)
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

  compareSort(value_a, value_b){
    if( value_a.id > value_b.id ){
      return 1;
    } else if ( value_a.id < value_b.id ) {
      return -1;
    }
    return 0;
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

  addColor(value){
    if(this.state.pickedColors.length < 10){
      let index = this.state.displayedColors;
      index = index.map( el => el.id ).indexOf(value);

      let displayed = this.state.displayedColors.splice(index, 1);
      this.state.pickedColors.push(displayed);
            
      this.setState({ 
        displayedColors: this.state.displayedColors,
        pickedColors: this.state.pickedColors
      });
    }
  }

  render() {

    return (
      <div className='container'>
        <div>
          <SearchBar onchange={this.liveSearch.bind(this)}/>
          <ColorsInfo amount={this.state.displayedColors.length} />
        </div>
        <div> 
          <ColorBlocks colors={this.state.displayedColors} callback={this.addColor} />
        </div>
      </div>
		);
  }
}

export default App;
import React, { Component } from 'react';

import { hot } from 'react-hot-loader';

import ColorsInfo from './colorsInfo';
import SearchBar from './searchBar';
import ColorBlocks from './colorBlocks';
import PickedColors from './pickedColors';

class App extends Component {
	constructor(props) {
    super(props);

    this.state = {
      displayedColors: [],
      searchValue: '',
      pickedColors: [],
      notPickedColors: []
    },
    this.filteredColors = [];
    
    this.addColor = this.addColor.bind(this);
    this.removeColor = this.removeColor.bind(this);
  }

  componentWillMount() {
    fetch('https://epam-fe-homework-15.firebaseio.com/colors.json')
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            displayedColors: Array.from(result),
            notPickedColors: Array.from(result)
          });
        },
        (error) => {
          this.setState({
            displayedColors: 0,
            notPickedColors: 0
          });
        }
      )
  }

  componentDidMount() {
    this.setState({ displayedColors: this.filteredColors })
  }

  liveSearch(evt){
    let displayed = this.state.notPickedColors.filter( el => {
      let searchValue = el.tags.join('');
      return searchValue.indexOf(evt.target.value.toLowerCase()) !== -1;
    });

    this.filteredColors = displayed;
    this.setState({ 
      displayedColors: this.filteredColors,
      searchValue: evt.target.value.toLowerCase()
    })
  }

  sortColors(arr){
    arr.sort( (value_a, value_b) => {
    if( value_a.id > value_b.id ){
      return 1;
    } else if ( value_a.id < value_b.id ) {
      return -1;
    }
    return 0;
    });
  }

  addColor(value){
    if(this.state.pickedColors.length < 10){
      let index = this.state.displayedColors;
      index = index.map( el => el.id ).indexOf(value);

      let displayed = this.state.displayedColors.splice(index, 1);
      this.state.pickedColors.push(displayed[0]);
            
      this.setState({ 
        displayedColors: this.state.displayedColors,
        pickedColors: this.state.pickedColors,
        notPickedColors: this.state.displayedColors
      });
    }
  }

  removeColor(value){

    let index = this.state.pickedColors;
    index = index.map( el => el.id ).indexOf(value);

    let displayed = this.state.pickedColors.splice(index, 1);
    this.state.displayedColors.push(displayed[0]);
    this.sortColors(this.state.displayedColors);
            
    this.setState({ 
      displayedColors: this.state.displayedColors,
      pickedColors: this.state.pickedColors,
      notPickedColors: this.state.displayedColors
    });    
  }

  render() {

    return (
      <div className='container'>
        <div>
          <SearchBar onchange={this.liveSearch.bind(this)} />
          <PickedColors colors={this.state.pickedColors} callback={this.removeColor} />
        </div>
        <div>
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
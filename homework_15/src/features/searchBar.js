import React, { Component } from 'react';

class SearchBar extends Component{

	render(){
		return(
			<div className='search-tab'>
				<input type='text' placeholder="Color's name, tags" onChange={this.props.onchange}/>
			</div>
		);
	}
}

export default SearchBar;
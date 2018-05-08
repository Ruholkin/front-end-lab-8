import React, { Component } from 'react';
import BigBlock from './bigBlock';

class ColorBlocks extends Component{

	render(){
		let colorBlocks = this.props;
		colorBlocks = Array.from(colorBlocks.colors);

		if(colorBlocks.length > 0){
			colorBlocks = colorBlocks.map( el => < BigBlock color={el.color} id={el.id} key={el.id} callback={this.props.callback} /> );
		} else {
			colorBlocks = <h2>There are no colors found</h2>
		}

		return (
			<div className='flex-container'> 
				{ 
					colorBlocks
				}
			</div>
		)
	}
}

export default ColorBlocks;
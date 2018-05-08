import React, { Component } from 'react';
import BigBlock from './bigBlock';

class ColorBlocks extends Component{

	render(){
		let colorBlocks = this.props;
		colorBlocks = Array.from(colorBlocks.colors);

		return (
			<div className='flex-container'> 
				{ colorBlocks = colorBlocks.map( el => < BigBlock color={el.color} id={el.id} key={el.tags.join(' ')} callback={this.props.callback} /> ) }
			</div>
		)
	}
}

export default ColorBlocks;
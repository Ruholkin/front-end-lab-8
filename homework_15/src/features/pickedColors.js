import React, { Component } from 'react';
import TinyBlock from './tinyBlock';
import TinyBlockEmpty from './tinyBlockEmpty';

class PickedColors extends Component{
	render(){
		let colorBlocks = [];

		if( this.props.colors.length > 0 ){
			colorBlocks = this.props.colors;

			if(colorBlocks.length > 5){
				colorBlocks = colorBlocks.slice(colorBlocks.length - 5, colorBlocks.length);
			}

			colorBlocks = colorBlocks.map( el => <TinyBlock color={el.color} id={el.id} key={el.id} callback={this.props.callback} /> );
		} else {
			for( let i = 0; i < 3; i++) {
				colorBlocks[i] = <TinyBlockEmpty key={i.toString()} id={i} />
			}
		}

		return (
			<div className='tiny-container'>
				<div className='block-tiny-container'>
					{
						colorBlocks
					}
				</div>
			</div>
		);
	}
}

export default PickedColors;

// 	render(){
// 		let colorBlocks = this.props;
// 		colorBlocks = Array.from(colorBlocks.colors);

// 		if(colorBlocks.length > 0){
// 			colorBlocks = colorBlocks.map( el => < BigBlock color={el.color} id={el.id} key={el.tags.join(' ')} callback={this.props.callback} /> );
// 		} else {
// 			colorBlocks = <h2>There are no colors found</h2>
// 		}

// 		return (
// 			<div className='flex-container'> 
// 				{ 
// 					colorBlocks
// 				}
// 			</div>
// 		)
// 	}
// }
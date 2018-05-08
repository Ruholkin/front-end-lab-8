import React, { Component } from 'react';
import TinyBlock from './tinyBlock';
import TinyBlockEmpty from './tinyBlockEmpty';

class PickedColors extends Component{
	render(){
		let _colors = [];
		console.log(this.props.colors);
		if( this.props.colors.length > 0 ){
			_colors = this.props.colors;
			_colors = _colors.map( el => {
				<TinyBlock color={el.color} id={el.id} key={el.id.toString()} callback={this.props.callback} />
			});
		} else {
			for( let i = 0; i < 3; i++) {
				_colors[i] = <TinyBlockEmpty key={i.toString()} id={i} />
			}
		}

		return (
			<div className='tiny-container'>
				<div className='block-tiny-container'>
					{
						_colors
					}
				</div>
			</div>
		);
	}
}

export default PickedColors;
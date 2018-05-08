import React, { Component } from 'react';

class TinyBlock extends Component{
	render(){
		console.log(this.props.color);
		return (
			<div className={'block-tiny'} styles={{ backgroundColor: this.props.color, 'border-color': this.props.color }}>
				<p>
					<span className={'material-icons'} onClick={ () => this.props.callback(this.props.id) }>cancel</span>
				</p>
			</div>
		);
	}
}

export default TinyBlock;
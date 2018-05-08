import React, { Component } from 'react';

class TinyBlock extends Component{

	render(){
		return (
			<div className={'block-tiny'} style={{ backgroundColor: this.props.color, borderColor: this.props.color }}>
				<p>
					<span className={'material-icons'} onClick={ () => this.props.callback(this.props.id) }>cancel</span>
				</p>
			</div>
		);
	}
}

export default TinyBlock;
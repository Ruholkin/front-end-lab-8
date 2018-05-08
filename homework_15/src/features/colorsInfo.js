import React, { Component } from 'react';

class ColorsInfo extends Component{

	render(){
		return (
			<div className='colors'>
				<p>Colors: {this.props.amount}</p>
			</div>
		)
	}
}

export default ColorsInfo;
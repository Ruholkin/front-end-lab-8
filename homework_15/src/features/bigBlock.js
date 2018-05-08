import React, { Component } from 'react';

class BigBlock extends Component {

	render(){

		return (
			<div className='block-big' style={{backgroundColor: this.props.color}} id={this.props.id} key={this.props.tags} >
				<div className='button-add'>
					<p>
						<span className='material-icons plus'>add</span>
						<span> Add</span>
					</p>
				</div>
			</div>
		);
	}
}

export default BigBlock;
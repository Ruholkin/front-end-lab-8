import React, { Component } from 'react';

class TinyBlockEmpty extends Component{
	render(){
		let classes = 'block-tiny';
		
		switch(this.props.id){
			case 0: 
				classes = classes + ' block-tiny-back';
				break;
			case 1:
				classes = classes + ' block-tiny-middle';
				break;
			default:
				classes = classes + ' block-tiny-front'; 
		};

		return (
			<div className={classes} >
			</div>
		);
	}
}

export default TinyBlockEmpty;
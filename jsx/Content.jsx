import React from 'react';
import ReactDOM from 'react-dom';

class Content extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			{this.props.children}
		</div>
		);	
	}
}

export default Content;
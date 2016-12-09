import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from "../components/PageHeader.jsx";

class About extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<PageHeader title="About This Site"/>
		</div>
		);	
	}
}

export default About;
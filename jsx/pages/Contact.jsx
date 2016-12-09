import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from '../components/PageHeader.jsx';

class Contact extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<PageHeader title="Contact Me"/>
		</div>
		);	
	}
}

export default Contact;
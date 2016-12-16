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
			<div>
				<h3>Garrett Emrick</h3>
				<h3>Github: EmrickGarrett </h3>
				<h3>Email: emrickgarrett@gmail.com</h3>
				<h3>LinkedIn: <a target="_" href="https://www.linkedin.com/in/emrickgarrett">https://www.linkedin.com/in/emrickgarrett</a></h3>
			</div>
		</div>
		);	
	}
}

export default Contact;
import React from 'react';
import ReactDOM from 'react-dom';

import PageHeader from "../components/PageHeader.jsx";

class About extends React.Component{
	constructor(){
		super();
	}
	render(){
		var styles = {
			biggerText: {
				fontSize: "1.5em",
			}
		}

		return(
		<div>
			<PageHeader title="About This Site"/>
			<p style={styles.biggerText}>
				This is just a fake news site I have made using React.js! If you find this outside of my repo, 
				you can always find it <a href="https://www.github.com/emrickgarrett/ReactNewsSite">here.</a>
			</p>
		</div>
		);	
	}
}

export default About;
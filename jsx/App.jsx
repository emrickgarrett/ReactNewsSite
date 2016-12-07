import React from 'react';
import ReactDOM from 'react-dom';
import DefaultHeader from './components/header_components/default_header.jsx';

var css = require("../css/index.css");


class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<DefaultHeader/>
			<p>Hello World</p>
		</div>
		);	
	}
}

export default App;
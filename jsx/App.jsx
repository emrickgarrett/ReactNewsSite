import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

import DefaultHeader from './components/header_components/default_header.jsx';

//Page Imports
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Top from './pages/Top.jsx';

import Content from './Content.jsx';

//These are default styles that are shared between
var css = require("../css/index.css");

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<DefaultHeader/>
			<Router history={hashHistory}>
				<Route path="/" component={Content}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="home" component={Home}></Route>
					<Route path="about" component={About}></Route>
					<Route path="top" component={Top}></Route>
					<Route path="contact" component={Contact}></Route>
				</Route>
			</Router>
		</div>
		);	
	}
}

export default App;
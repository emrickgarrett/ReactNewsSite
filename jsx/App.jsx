import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

//Page Imports
import About from './pages/About.jsx';
import Home from './pages/Home.jsx';
import Contact from './pages/Contact.jsx';
import Top from './pages/Top.jsx';
import Article from './pages/Article.jsx';
import p404 from './pages/p404.jsx';

import Content from './Content.jsx';

//These are default styles that are shared between pages
var css = require("../css/index.css");

class App extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<Router history={hashHistory}>
				<Route path="/" component={Content}>
					<IndexRoute component={Home}></IndexRoute>
					<Route path="home" component={Home}></Route>
					<Route path="about" component={About}></Route>
					<Route path="top" component={Top}></Route>
					<Route path="contact" component={Contact}></Route>
					<Route path="Article" component={Article}></Route>
					<Route path="404" component={p404}></Route>
				</Route>
			</Router>
		</div>
		);	
	}
}

export default App;
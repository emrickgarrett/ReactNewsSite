import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router';

class DefaultHeader extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div className="header">
			<a href="#">ReactNews</a>
			<Navigation/>
		</div>
		);	
	}


}

class Navigation extends React.Component{
	constructor(){
		super();
	}

	componentDidMount(){

		//Add animation to buttons so that the animation doesn't run when page loads
		var items = this.refs.nav_list.getElementsByTagName("li");
		for(var i = 0; i < items.length; i++){
			items[i].childNodes[0].onmouseout = function(){
				this.className = "header_list_anim";
			};
		}
	}

	render(){
		return(
			<ul ref="nav_list">
				<li><Link to='home'>Home</Link></li>
				<li><Link to='top'>Top</Link></li>
				<li><Link to='about'>About</Link></li>
				<li><Link to='contact'>Contact</Link></li>
			</ul>
		);
	}


}

export default DefaultHeader;
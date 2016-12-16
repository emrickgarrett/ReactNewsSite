import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'
import PageHeader from "../PageHeader.jsx";


class FullArticle extends React.Component{
	constructor(){
		super();
	}

	componentWillMount(){
		this.articleCheck(this.props);
	}

	componentWillUpdate(nextProps, nextState){
		//If User manually changes ID in browser it will break the whole application without this.
		//This will do an auto check if the state is updated.
		this.articleCheck(nextProps);
	}

	articleCheck(props){
		if(typeof props.article === 'undefined' || props.article == null){
			//Article does not exist. Need to redirect to 404 page.
			hashHistory.push('/404');
		}
	}

	render(){
		return(
		<div>
			<Heading title={typeof this.props.article !== 'undefined'? this.props.article.title : ""} 
					author={typeof this.props.article !== 'undefined'? this.props.article.author: ""}
					date={typeof this.props.article !== 'undefined'? this.props.article.date : ""}
				/>
			<Article story={typeof this.props.article !== 'undefined'? this.props.article.story : ""}/>
		</div>
		);	
	}
}

function Heading(props){
	return(
		<div>
			<PageHeader title={props.title}/>
			<h4>{props.author} : {props.date}</h4>
		</div>
	);
}

function Article(props){
	return(
		<div>
			<p>{props.story}</p>
		</div>
	);
}

export default FullArticle;
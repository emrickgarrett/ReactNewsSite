import React from 'react';
import ReactDOM from 'react-dom';

class FullArticle extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<Heading title={this.props.article.title} 
					author={this.props.article.author}
					date={this.props.article.date}
				/>
			<Article story={this.props.article.story}/>
		</div>
		);	
	}
}

function Heading(props){
	return(
		<div>
			<h2>{props.title}</h2>
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
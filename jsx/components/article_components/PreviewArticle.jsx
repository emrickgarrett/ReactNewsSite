import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'

class PreviewArticle extends React.Component{
	constructor(){
		super();
	}

	articleClicked(num){
		hashHistory.push('/article?article_id=' + num);
	}

	render(){

		var styles = {
			divBackground: {
				background: '#000 url(' + this.props.article.image + ') top left no-repeat',
				backgroundSize: 'cover',
				maxWidth:'20em',
				maxHeight:'20em',
				width: '20em',
				height: '20em',
			},
		}

		return(
		<div className='prev-article' onClick={() => this.articleClicked(this.props.article.id)} style={styles.divBackground}>
			<Heading title={this.props.article.title} 
					author={this.props.article.author}
					date={this.props.article.date}
				/>
		</div>
		);	
	}
}

function Heading(props){
	return(
		<div >
			<h2 className='prev-title'>{props.title}</h2>
			<span className='prev-author-date'>{props.author} : {props.date}</span>
		</div>
	);
}

export default PreviewArticle;
import React from 'react';
import ReactDOM from 'react-dom';

class PreviewArticle extends React.Component{
	constructor(){
		super();
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
		<div className='prev-article' style={styles.divBackground}>
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
		<div>
			<h2 className='prev-title'>{props.title}</h2>
			<h4 className='prev-author-date'>{props.author} : {props.date}</h4>
		</div>
	);
}

export default PreviewArticle;
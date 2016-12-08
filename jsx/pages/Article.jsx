import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'

import FullArticle from '../components/article_components/FullArticle.jsx'

import dummyData from '../dummy_data/articles.json';

class Article extends React.Component{
	constructor(props){
		super(props);

		this.state = {
			articles : dummyData.articles
		}

		
	}

	componentDidMount(){
		if(this.props.location.query.article_id >= this.state.articles.length){
			//Article does not exist. Need to redirect to 404 page.
			hashHistory.push('/404');

		}
	}
	render(){
		return(
		<div>
			<FullArticle article={this.state.articles[this.props.location.query.article_id]}/>
		</div>
		);	
	}
}

export default Article;
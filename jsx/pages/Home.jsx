import React from 'react';
import ReactDOM from 'react-dom';

import FullArticle from "../components/article_components/FullArticle.jsx"
import PreviewArticle from "../components/article_components/PreviewArticle.jsx"

import dummyData from '../dummy_data/articles.json';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
			articles: dummyData.articles
		};
	}
	render(){
		return(
		<div>
			<FullArticle article={this.state.articles[0]}/>
			<PreviewArticle article={this.state.articles[1]}/>
		</div>
		);	
	}
}

export default Home;
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
		<div className='article-container'>
			{this.state.articles.map((article, i) => <PreviewArticle key = {i} article = {article} />)}
		</div>
		);	
	}
}

export default Home;
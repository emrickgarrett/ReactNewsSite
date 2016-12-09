import React from 'react';
import ReactDOM from 'react-dom';

import FullArticle from "../components/article_components/FullArticle.jsx"
import PreviewArticle from "../components/article_components/PreviewArticle.jsx"
import PageHeader from '../components/PageHeader.jsx';

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
			<PageHeader title="Trending Stories" date="true"/>
			<div className='article-container'>
				{this.state.articles.map((article, i) => <PreviewArticle key = {i} article = {article} />)}
			</div>
		</div>
		);	
	}
}

export default Home;
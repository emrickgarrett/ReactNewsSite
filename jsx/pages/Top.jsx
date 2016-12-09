import React from 'react';
import ReactDOM from 'react-dom';

import FullArticle from "../components/article_components/FullArticle.jsx"
import PreviewArticle from "../components/article_components/PreviewArticle.jsx"
import PageHeader from '../components/PageHeader.jsx';

import dummyData from '../dummy_data/articles.json';

class Top extends React.Component{
	constructor(){
		super();
	}
	render(){
		return(
		<div>
			<PageHeader title="Top Stories" date="true" />
		</div>
		);	
	}
}

export default Top;
import React from 'react';
import ReactDOM from 'react-dom';
import {hashHistory} from 'react-router'

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

	articleClicked(num){
		hashHistory.push('/article?article_id=' + num);
	}

	render(){

		var styles = {
			inlineBlock:{
				display:"inline-block"
			}
		}

		return(
		<div onClick={() => this.articleClicked(1)} style={styles.inlineBlock}>
			<PreviewArticle  article={this.state.articles[1]}/>
		</div>
		);	
	}
}

export default Home;
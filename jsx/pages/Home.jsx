import React from 'react';
import ReactDOM from 'react-dom';

import FullArticle from "../components/article_components/FullArticle.jsx"
import PreviewArticle from "../components/article_components/PreviewArticle.jsx"

import dummyData from '../dummy_data/articles.json';

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
			articles: dummyData.articles,
			date: this.buildDate(),
		};
	}

	buildDate(){

		var date = new Date();
		var month = this.getMonthByName(date.getMonth());
		var day = this.formatDay(date.getDate());
		var year = date.getFullYear();


		return "" + month + " " + day + ", " + year;
	}

	getMonthByName(int){
		switch(int){
			case 0:
				return "January";
			case 1:
				return "February";
			case 2:
				return "March";
			case 3:
				return "April";
			case 4:
				return "May";
			case 5:
				return "June";
			case 6:
				return "July";
			case 7:
				return "August";
			case 8:
				return "September";
			case 9:
				return "October";
			case 10:
				return "November";
			case 11:
				return "December";
		}
	}

	formatDay(int){

		switch(int % 10){
			case 1:
				return int + "st";
			case 2:
				return int + "nd";
			case 3:
				return int + "rd";
		}

		return int + "th";
	}

	render(){
		return(
		<div>
			<div className="home-header-container">
				<span className="home-title">Trending Stories</span>
				<span className="home-date">{this.state.date}</span>
			</div>
			<hr/>
			<div className='article-container'>
				{this.state.articles.map((article, i) => <PreviewArticle key = {i} article = {article} />)}
			</div>
		</div>
		);	
	}
}

export default Home;
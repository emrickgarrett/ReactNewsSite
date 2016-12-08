import React from 'react';
import ReactDOM from 'react-dom';

import FullArticle from "../components/article_components/FullArticle.jsx"
import PreviewArticle from "../components/article_components/PreviewArticle.jsx"

class Home extends React.Component{
	constructor(){
		super();

		this.state = {
			articles: [
				{
					title: "Example News Article",
					author: "John Doe",
					date: "December 12th, 2016",
					story: "Lorem Ipsum Dolerum Blah",
					image: "http://domaingang.com/wp-content/uploads/2012/02/example.png"		
				},
				{
					title: "How to create a News Site",
					author: "Garrett Emrick",
					date: "December 11th, 2016",
					story: "Lorem Ipsum Dolerum BLah",
					image: "http://pad1.whstatic.com/images/thumb/a/af/Write-a-News-Article-Step-3-Version-2.jpg/aid1093007-728px-Write-a-News-Article-Step-3-Version-2.jpg"
				}
			]
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
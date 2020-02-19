import React from 'react';
import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import DATA from "../components/data";

function Article(){
	console.log("DATA",DATA)
	const [article, setArticle] = useState({});
	let { id } = useParams();

	useEffect(() => {
		//filter is sort of like a loop where it compares the things on either siade of the arrow based on the equality on the right side
		let dataArray = DATA.filter(article =>(
			article.id === id
			));
		setArticle(dataArray[0]);
		console.log("dataArray", dataArray);
	}, [id]);

	return	(
	<div>
		<header
			className='articleHeader'
			style={{
				backgroundImage: 'url($article.image ? article.image.url : "")'
			}}
			//this thing needs to be here for some reason
			>
			<div className = 'articleHeaderWrapper'>
				<h1>{article.title}</h1>
				<p>{article.publishedDate}</p>
				<p>{article.blurb}</p>
			</div>
		</header>
		<main className="articleContent">
			<div className="articleContentWrapper">
				{article.articleText && article.articleText.map((text,i)=> <p key={i}>{text.data}</p>)}
			</div>
		</main>
	</div>
	);
}

export default Article;
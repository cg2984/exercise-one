import React from 'react';
import {useParams} from "react-router-dom";
//use state sets the state inside the memory
//you access/change state variables with useEffect. it runs a bit of code when something happens 
import {useEffect, useState} from "react";
import DATA from "../components/data";

function Article(){
	//this sets the article according  
	const [article, setArticle] = useState({});
	//useParams is a react router thing that will grab all the parameters from your url. by setting it equal to {id} it only takes the id
	//connected to the route in app.js
	let { id } = useParams();
	//this controls the actions that changes the state. whenever the id changes the code in the brackets will happen
	useEffect(() => {
		//new array that is filtered json data
		//filter is sort of like a loop where it compares the things on either siade of the arrow based on the equality on the right side
		//filter recives one function which is a callback function
		let dataArray = DATA.filter(article => article.id === id)
		setArticle(dataArray[0]);
		console.log("dataArray", dataArray);
	}, [id])
	return	(
	<div>
		<header>
			<h1>{article.title}</h1>
			<p> Article Date </p>
			<p>{article.blurb}</p>
		</header>
		<main>
		</main>
	</div>
	);
}

export default Article;
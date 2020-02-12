import React from 'react';
import {useParams} from "react-router-dom"

function Article(){
	let { id } = useParams();
	return	(
	<div>
		<header>
			<h1> Article Title:{id}</h1>
			<p> Article Date </p>
			<p> Article blurb </p>
		</header>
		<main>
		</main>
	</div>
	);
}

export default Article;
import React from 'react';
import ArticleCard from '../components/articleCard';
import Data from '../components/data';

function ArticleListing(){
	console.log('data', Data);
	return(
		<div>
			<header>
				<h1>Articles</h1>
			</header>
			<main>
				<ArticleCard/>
			</main>
		</div>
	);
}

export default ArticleListing;
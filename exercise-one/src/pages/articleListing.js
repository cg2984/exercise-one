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
				{Data.map((article, i) => (
					<ArticleCard 
						key={i} 
						articleData={article}
					/>
				//map is like a for loop
				//the first parameter is the thing(s) in the json file, in this case it is the object article
				//the second parameter is the i which is the amount of thing(s) in the json file. the map function automatically knows the amount of objects called "article" and cycles through each of them automatically
				//for each thing called article in the json file, the map function makes an article card in the main and links it to the data from that specific thing in the json file
				//this data is now called articleData and can be applied in different parts of app
				))}
			</main>
		</div>
	);
}

export default ArticleListing;
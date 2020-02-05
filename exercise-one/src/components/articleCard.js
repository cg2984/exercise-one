import React from 'react';
//going to put a single property called props into the function. thats all it can take
//that article is from the article listing file where we set 
//since article is an object we can add the .stuff to pull info from a json file
function ArticleCard({articleData}){
	console.log('article card article', articleData);
	return (
		<article>
			<div>
				<img src="" alt=""/>
			</div>
			<div>
				<h2>{articleData.title}</h2>
				<p> date</p>
				<p>{articleData.blurb}</p>
				<a href=""> read more </a>
			</div>
		</article>
	);
}

export default ArticleCard
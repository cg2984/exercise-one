import React from 'react';
//going to put a single property called props into the function. thats all it can take
//that article is from the article listing file where we set 
//since article is an object we can add the .stuff to pull info from a json file
function ArticleCard({articleData}){
	console.log('article card article', articleData);
	return (
		<article className="articleCard">
			<div className="articleCard__image">
				<img src={articleData.image.url} alt={articleData.image.alt}/>
			</div>
			<div className="articleCard__text">
				<h2>{articleData.title}</h2>
				<p> date</p>
				<p>{articleData.blurb}</p>
				<a href='article/${articleData.id}'> read more </a>
			</div>
		</article>
	);
}

export default ArticleCard
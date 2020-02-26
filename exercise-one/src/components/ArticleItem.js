import React from 'react';

function ArticleItem({data,type}){
	console.log("data type", data, type);
	if (type === "h2"){
		return <h2>{data}</h2>
	};

	return <p>{data}</p>
}

export default ArticleItem
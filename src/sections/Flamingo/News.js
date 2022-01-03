import React from 'react';
import { news } from './db';
import Card from './Card';

const News = () => (
	<div className="bg-blue section">
		<div className="container text-center mb-l">
			<h2 className="mb-default">Latest News.</h2>
			<h5>Check Out Some of Our News</h5>
		</div>
		<div className="columns-3">
			{news.map((item, index) => (
				<Card item={item} key={index} />
			))}
		</div>
	</div>
);
export default News;

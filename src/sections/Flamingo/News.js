import React from 'react';
import { news } from './db';

const News = () => (
	<div className="bg-blue section">
		<div className="container text-center mb-l">
			<h2 className="mb-default">Latest News.</h2>
			<h5>Check Out Some of Our News</h5>
		</div>
		<div className="columns-3">
			{news.map((item, index) => (
				<div className="column b-white" key={index}>
					<div className="w-100">
						<div
							className="pt-100 bg-cover"
							style={{
								backgroundImage: item.image,
							}}
						></div>
					</div>
					<div className="p-default">
						<p className="mb-default">{item.heading}</p>
						<p className="mb-default">{item.description}</p>
						<a href={item.button} className="button-small">
							read more
						</a>
					</div>
				</div>
			))}
		</div>
	</div>
);
export default News;

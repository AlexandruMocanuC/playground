import React from 'react';
import { blog } from './db';
import Card from '~s/Flamingo/Card';

const Blog = () => (
	<>
		<div
			className="bg-cover header-small"
			style={{
				backgroundImage: blog.header.image,
			}}
		>
			<h1>{blog.header.heading}</h1>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<div className="text-center mb-l">
					<h2 className="mb-default">{blog.heading}</h2>
					<h5>{blog.description}</h5>
				</div>
				<div>
					<div className="columns-3">
						{blog.articles.map((article, index) => (
							<Card key={index} item={article} />
						))}
					</div>
				</div>
			</div>
		</div>
	</>
);
export default Blog;

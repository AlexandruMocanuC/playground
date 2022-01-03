import React from 'react';
import { article } from './db';

const Article = () => (
	<>
		<div
			className="bg-cover header-article section"
			style={{
				backgroundImage: article.header.image,
			}}
		>
			<div className="overlay"></div>
			<div className="container">
				<h5 className="mb-m">{article.header.category}</h5>
				<h2>{article.header.heading}</h2>
			</div>
		</div>
		<div className="bg-blue section article">
			<div className="container">
				<div className="sidebar">
					{article.content.sidebar.details.map((item, index) => (
						<div className="detail bb-white" key={index}>
							<h5 className="mb-default">{item.heading}</h5>
							<p>{item.description}</p>
						</div>
					))}
					<div className="social-media-small">
						{article.content.sidebar.socialMedia.map(
							(item, index) => (
								<a href={item.link}>
									<i className={item.icon}> </i>
								</a>
							)
						)}
					</div>
				</div>
				<div className="main">
					{article.content.main.map((element, index) => {
						if (element.type === 'paragraph') {
							return (
								<p className="mb-default" key={index}>
									{element.content}
								</p>
							);
						} else if (element.type === 'heading') {
							return (
								<h3 className="mb-default mt-m" key={index}>
									{element.content}
								</h3>
							);
						} else if (element.type === 'description') {
							return (
								<p className="uppercase mb-default" key={index}>
									{element.content}
								</p>
							);
						} else
							return (
								<img
									className="mb-default mt-m"
									key={index}
									src={element.content}
								/>
							);
					})}
				</div>
			</div>
		</div>
	</>
);
export default Article;

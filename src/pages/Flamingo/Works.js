import React, { useState } from 'react';
import { works } from './db';

const Works = () => {
	const [category, setCategory] = useState(null);

	const filteredWorks =
		category === null
			? works.content.columns
			: works.content.columns.filter(
					column => column.category === category
			  );

	const categories = [];

	works.content.columns.forEach(column =>
		categories.includes(column.category)
			? null
			: categories.push(column.category)
	);

	return (
		<>
			<div
				className="bg-cover header-small"
				style={{
					backgroundImage: works.header.image,
				}}
			>
				<h1>{works.header.heading}</h1>
			</div>
			<div className="bg-blue section">
				<div className="container">
					<div className="text-center mb-m">
						<h2 className="mb-default">{works.content.heading}</h2>
						<h5 className="mb-m">{works.content.description}</h5>
						<div className="categories">
							<div
								className="button"
								onClick={() => setCategory(null)}
							>
								ALL
							</div>
							{categories.map((category, index) => (
								<div
									className="button"
									key={index}
									onClick={() => setCategory(category)}
								>
									{category}
								</div>
							))}
						</div>
					</div>
					<div className="columns-2">
						{filteredWorks.map((column, index) => (
							<div
								style={{
									backgroundImage: column.image,
								}}
								className="column mb-default work-height bg-cover"
								key={index}
							>
								<div className="overlay">
									<h4>{column.heading}</h4>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Works;

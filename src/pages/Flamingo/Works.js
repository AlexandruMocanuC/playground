import React from 'react';
import { works } from './db';

const Works = () => (
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
					<h5>{works.content.description}</h5>
				</div>
				<div className="columns-2">
					{works.content.columns.map((column, index) => (
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
export default Works;

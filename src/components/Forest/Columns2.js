import React from 'react';

const Columns2 = ({ heading, paragraphs, image }) => {
	return (
		<div className="container">
			<div className="columns-2">
				<div className="column">
					<h2>{heading}</h2>
					{paragraphs.map((p, index) => (
						<p key={index}>{p}</p>
					))}
				</div>
				<div
					className="column bg-cover"
					style={{ backgroundImage: image }}
				></div>
			</div>
		</div>
	);
};

export default Columns2;

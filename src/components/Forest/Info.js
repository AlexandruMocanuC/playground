import React from 'react';

const Info = ({ heading, description }) => {
	return (
		<div className="info-component">
			<div className="container">
				<h2>{heading}</h2>
				<p>{description}</p>
			</div>
		</div>
	);
};

export default Info;

import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ item }) => (
	<div className="column b-white">
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
			<Link to={item.button} className="button-small">
				read more
			</Link>
		</div>
	</div>
);
export default Card;

import React, { useEffect } from 'react';
import { works } from './db';

import { PUBLIC_URL } from '~/constants/flamingo';

const Works = () => {
	useEffect(() => {
		import('./works.css');
	}, []);
	return (
		<div className="works">
			{works.map((work, index) => (
				<div
					className="work bg-cover"
					style={{
						backgroundImage: work.image,
					}}
					key={index}
				>
					<div className="overlay">
						<h4>{work.name}</h4>
					</div>
				</div>
			))}
		</div>
	);
};
export default Works;

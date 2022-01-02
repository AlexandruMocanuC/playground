import React, { useEffect } from 'react';
import { progress } from './db';
const Progress = () => {
	useEffect(() => {
		import('./progress.css');
	}, []);
	return (
		<>
			{progress.map((item, index) => (
				<div className={item.classes} key={index}>
					<h4>{item.name}</h4>
					<h4>{item.percentage}</h4>
				</div>
			))}
		</>
	);
};

export default Progress;

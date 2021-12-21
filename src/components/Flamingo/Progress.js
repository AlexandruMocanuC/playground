import React, { useEffect } from 'react';
const Progress = () => {
	useEffect(() => {
		import('./progress.css');
	}, []);
	return (
		<>
			<div className="flex-between progress-bar progress-bar-90">
				<h4>UI Design</h4>
				<h4>90%</h4>
			</div>
			<div className="flex-between progress-bar progress-bar-60">
				<h4>UX Design</h4>
				<h4>60%</h4>
			</div>
			<div className="flex-between progress-bar progress-bar-80">
				<h4>Digital Marketing</h4>
				<h4>80%</h4>
			</div>
			<div className="flex-between progress-bar progress-bar-70">
				<h4>Social Media</h4>
				<h4>70%</h4>
			</div>
		</>
	);
};

export default Progress;

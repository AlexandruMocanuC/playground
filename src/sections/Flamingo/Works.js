import React, { useEffect } from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const Works = () => {
	useEffect(() => {
		import('./works.css');
	}, []);
	return (
		<div className="works">
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/watch.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>Smart Watch</h4>
				</div>
			</div>
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/watch2.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>UX Design</h4>
				</div>
			</div>
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/headphone.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>Mockup</h4>
				</div>
			</div>
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/mac.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>The UI Design</h4>
				</div>
			</div>
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/watch3.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>One Product</h4>
				</div>
			</div>
			<div
				className="work bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/flamingos.jpg)`,
				}}
			>
				<div className="overlay">
					<h4>The UX Designs</h4>
				</div>
			</div>
		</div>
	);
};
export default Works;

import React, { useEffect } from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const About = () => {
	useEffect(() => {
		import('./about.css');
	}, []);
	return (
		<>
			<div className="columns-2 mb-default">
				<div
					className="column bg-cover"
					style={{
						backgroundImage: `url(${PUBLIC_URL}/images/people-talking.jpg)`,
					}}
				>
					<div className="overlay"></div>
					<div className="details">
						<h4 className="mb-default">Team Work</h4>
						<p>Committed and creative</p>
					</div>
				</div>
				<div className="column">
					<div className="columns-2-v">
						<div
							className="column bg-cover"
							style={{
								backgroundImage: `url(${PUBLIC_URL}/images/people-working.jpg)`,
							}}
						>
							<div className="overlay"></div>
							<div className="details">
								<h4 className="mb-default">Philosophy</h4>
								<p>Trust pays off</p>
							</div>
						</div>
						<div
							className="column bg-cover"
							style={{
								backgroundImage: `url(${PUBLIC_URL}/images/office.jpg)`,
							}}
						>
							<div className="overlay"></div>
							<div className="details">
								<h4 className="mb-default">Office</h4>
								<p>Somewhere on earth</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="columns-3">
				<div className="column p-default">
					<div className="width-80">
						<h4 className="mb-default">Who we are</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ut elit tellus, luctus nec ullamcorper mattis,
							pulvinar dapibus leo.
						</p>
					</div>
				</div>
				<div className="column p-default">
					<div className="width-80">
						<h4 className="mb-default">Our philosophy</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ut elit tellus, luctus nec ullamcorper mattis,
							pulvinar dapibus leo.
						</p>
					</div>
				</div>
				<div className="column p-default">
					<div className="width-80">
						<h4 className="mb-default">How we work</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ut elit tellus, luctus nec ullamcorper mattis,
							pulvinar dapibus leo.
						</p>
					</div>
				</div>
			</div>
		</>
	);
};
export default About;

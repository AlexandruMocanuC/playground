import React, { useEffect } from 'react';
import { about } from './db';
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
						backgroundImage: about.columns.column1.image,
					}}
				>
					<div className="overlay"></div>
					<div className="details">
						<h4 className="mb-default">
							{about.columns.column1.heading}
						</h4>
						<p>{about.columns.column1.description}</p>
					</div>
				</div>
				<div className="column">
					<div className="columns-2-v">
						<div
							className="column bg-cover"
							style={{
								backgroundImage: about.columns.column2.image,
							}}
						>
							<div className="overlay"></div>
							<div className="details">
								<h4 className="mb-default">
									{about.columns.column2.heading}
								</h4>
								<p>{about.columns.column2.description}</p>
							</div>
						</div>
						<div
							className="column bg-cover"
							style={{
								backgroundImage: about.columns.column3.image,
							}}
						>
							<div className="overlay"></div>
							<div className="details">
								<h4 className="mb-default">
									{about.columns.column3.heading}
								</h4>
								<p>{about.columns.column3.description}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="columns-3">
				{about.details.map((detail, index) => (
					<div className="column p-default" key={index}>
						<div className="width-80">
							<h4 className="mb-default">{detail.heading}</h4>
							<p>{detail.description}</p>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default About;

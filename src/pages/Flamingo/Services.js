import React from 'react';

import Services from '~s/Flamingo/Services.js';
import Progress from '~c/Flamingo/Progress.js';
import { services } from './db';

import { Link } from 'react-router-dom';

const ServicesPage = () => (
	<div className="services-page">
		<div
			className="header-small bg-cover"
			style={{
				backgroundImage: services.header.image,
			}}
		>
			<h1>{services.header.heading}</h1>
		</div>
		<div className="bg-blue section">
			<div className="container text-center mb-l">
				<h2 className="mb-default">{services.ourServices.heading}</h2>
				<h5>{services.ourServices.description}</h5>
			</div>
			<div className="container">
				<Services />
			</div>
		</div>
		<div
			className="bg-cover bg-fixed section text-center"
			style={{
				backgroundImage: services.works.image,
			}}
		>
			<h2 className="mb-m">{services.works.heading}</h2>
			<Link to={services.works.button.link} className="button">
				{services.works.button.text}
			</Link>
		</div>
		<div className="bg-grey section">
			<div className="container">
				<div className="columns-2">
					<div className="column">
						<div className="width-80">
							<h2 className="mb-m">{services.skills.heading}</h2>
							<p>{services.skills.description}</p>
						</div>
					</div>
					<div className="column">
						<div className="width-80">
							<Progress />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ServicesPage;

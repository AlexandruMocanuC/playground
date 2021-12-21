import React from 'react';

import Services from '~s/Flamingo/Services.js';
import Progress from '~c/Flamingo/Progress.js';

import { PUBLIC_URL } from '~/constants/flamingo';

const ServicesPage = () => (
	<div className="services-page">
		<div
			className="header-small bg-cover"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/images/services/header-bg.jpg)`,
			}}
		>
			<h1>Services.</h1>
		</div>
		<div className="bg-blue section">
			<div className="container text-center mb-l">
				<h2 className="mb-default">Our services.</h2>
				<h5>Our Services for clients</h5>
			</div>
			<div className="container">
				<Services />
			</div>
		</div>
		<div
			className="bg-cover bg-fixed section text-center"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
			}}
		>
			<h2 className="mb-m">Wanna see our works?</h2>
			<a href="#" className="button">
				all projects
			</a>
		</div>
		<div className="bg-grey section">
			<div className="container">
				<div className="columns-2">
					<div className="column">
						<div className="width-80">
							<h2 className="mb-m">
								Here are some of our great skills
							</h2>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras id arcu luctus,
								pellentesque lorem ac, pharetra sapien. Donec
								elementum, tortor vel viverra ultrices, lacus
								orci venenatis tortor, vel rhoncus ipsum felis a
								diam.
							</p>
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

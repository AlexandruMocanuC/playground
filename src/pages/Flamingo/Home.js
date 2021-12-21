import React from 'react';

import News from '~s/Flamingo/News.js';
import Testimonials from '~s/Flamingo/Testimonials.js';
import About from '~s/Flamingo/About.js';
import Works from '~s/Flamingo/Works.js';
import Services from '~s/Flamingo/Services.js';
import Services2 from '~c/Flamingo/Services2.js';
import Customers from '~c/Flamingo/Customers.js';

import { PUBLIC_URL } from '~/constants/flamingo';

const FlamingoHome = () => (
	<div className="flamingo">
		<div className="header bg-black section">
			<div
				className="container bg-cover"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/header-homepage.jpg)`,
				}}
			>
				<div className="width-50 mb-l">
					<h5 className="mb-m">Creative mind, creative works</h5>
					<h1 className="mb-m">We are digital agency.</h1>
					<a href="#" className="button">
						getting started
					</a>
				</div>
				<Services2 />
			</div>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<h2 className="mb-default">
					<span className="separator" />
					Services.
				</h2>
				<h5 className="mb-l">Our Services for clients</h5>
				<Services />
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container flex-between mb-l">
				<div>
					<h2 className="mb-default">
						<span className="separator"></span>Works.
					</h2>
					<h5>Things We've Made</h5>
				</div>
				<a href="#" className="button">
					view all
				</a>
			</div>
			<Works />
		</div>
		<div className="bg-blue section about-section">
			<div className="container">
				<h2 className="mb-default">
					<span className="separator"></span>About.
				</h2>
				<h5 className="mb-m">We are more than digital agency</h5>
				<About />
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-m">
				<h2 className="mb-default">
					<span className="separator"></span>Testimonials.
				</h2>
				<h5>We are more than digital agency</h5>
			</div>
			<Testimonials />
			<div className="container">
				<Customers />
			</div>
		</div>
		<News />
	</div>
);

export default FlamingoHome;

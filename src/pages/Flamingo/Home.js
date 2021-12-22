import React from 'react';

import { Link } from 'react-router-dom';

import News from '~s/Flamingo/News.js';
import Testimonials from '~s/Flamingo/Testimonials.js';
import About from '~s/Flamingo/About.js';
import Works from '~s/Flamingo/Works.js';
import Services from '~s/Flamingo/Services.js';
import Services2 from '~c/Flamingo/Services2.js';
import Customers from '~c/Flamingo/Customers.js';

import { PUBLIC_URL, base } from '~/constants/flamingo';
import { home } from './db';

const FlamingoHome = () => (
	<div className="flamingo">
		<div className="header bg-black section">
			<div
				className="container bg-cover"
				style={{
					backgroundImage: home.header.image,
				}}
			>
				<div className="width-50 mb-l">
					<h5 className="mb-m">{home.header.description}</h5>
					<h1 className="mb-m">{home.header.heading}</h1>
					<a href="#" className="button">
						{home.header.button}
					</a>
				</div>
				<Services2 />
			</div>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<h2 className="mb-default">
					<span className="separator" />
					{home.services.heading}
				</h2>
				<h5 className="mb-l">{home.services.description}</h5>
				<Services />
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container flex-between mb-l">
				<div>
					<h2 className="mb-default">
						<span className="separator"></span>
						{home.works.heading}{' '}
					</h2>
					<h5>{home.works.description}</h5>
				</div>
				<Link to={home.works.button.link} className="button">
					{home.works.button.text}
				</Link>
			</div>
			<Works />
		</div>
		<div className="bg-blue section about-section">
			<div className="container">
				<h2 className="mb-default">
					<span className="separator"></span>
					{home.about.heading}
				</h2>
				<h5 className="mb-m">{home.about.description}</h5>
				<About />
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-m">
				<h2 className="mb-default">
					<span className="separator"></span>
					{home.testimonials.heading}
				</h2>
				<h5>{home.testimonials.description}</h5>
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

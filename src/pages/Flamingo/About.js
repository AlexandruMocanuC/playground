import React from 'react';

import Progress from '~c/Flamingo/Progress.js';
import Perks from '~s/Flamingo/Perks.js';
import Team from '~s/Flamingo/Team.js';

import { PUBLIC_URL } from '~/constants/flamingo';

const AboutPage = () => (
	<div className="about-page">
		<div
			className="header-small bg-cover"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/images/about/office.jpg)`,
			}}
		>
			<div className="text-center">
				<h1>About us.</h1>
			</div>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<Perks />
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container">
				<div className="columns-2">
					<div className="column">
						<div className="width-80">
							<h2 className="mb-m">
								Here are some of our great skills
							</h2>
							<p className="mb-m">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Cras id arcu luctus,
								pellentesque lorem ac, pharetra sapien.{' '}
							</p>
							<Progress />
						</div>
					</div>
					<div
						className="column bg-cover"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/about/phone.jpg)`,
						}}
					></div>
				</div>
			</div>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<div className="columns-2">
					<div
						className="column bg-cover"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/services/laptop.jpg)`,
						}}
					></div>
					<div className="column">
						<div className="p-m">
							<h2 className="mb-m">
								Best Solutions for Your Business
							</h2>
							<p className="mb-m">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aliquam sit amet urna quis odio
								vehicula consectetur. Donec eu gravida diam.
								Aenean accumsan nisl sed fringilla sollicitudin.
								Donec tincidunt quis dolor eget consectetur.
								Suspendisse a mollis lacus.
							</p>
							<a href="#" className="button">
								<i className="fas fa-play mr-default"></i>
								Watch video
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-l">
				<h2 className="mb-default">
					<span className="separator"></span>Meet our team.
				</h2>
				<h5>the best people to support your project</h5>
			</div>
			<Team />
		</div>
	</div>
);

export default AboutPage;

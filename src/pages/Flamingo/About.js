import React from 'react';

import Progress from '~c/Flamingo/Progress.js';
import Perks from '~s/Flamingo/Perks.js';
import Team from '~s/Flamingo/Team.js';
import { about } from './db';

import { PUBLIC_URL } from '~/constants/flamingo';

const AboutPage = () => (
	<div className="about-page">
		<div
			className="header-small bg-cover"
			style={{
				backgroundImage: about.header.image,
			}}
		>
			<div className="text-center">
				<h1>{about.header.heading}</h1>
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
							<h2 className="mb-m">{about.skills.heading}</h2>
							<p className="mb-m">{about.skills.description}</p>
							<Progress />
						</div>
					</div>
					<div
						className="column bg-cover"
						style={{
							backgroundImage: about.skills.image,
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
							backgroundImage: about.video.image,
						}}
					></div>
					<div className="column">
						<div className="p-m">
							<h2 className="mb-m">{about.video.heading}</h2>
							<p className="mb-m">{about.video.description}</p>
							<a href="#" className="button">
								<i className="fas fa-play mr-default"></i>
								{about.video.button.text}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-l">
				<h2 className="mb-default">
					<span className="separator"></span>
					{about.team.heading}
				</h2>
				<h5>{about.team.description}</h5>
			</div>
			<Team />
		</div>
	</div>
);

export default AboutPage;

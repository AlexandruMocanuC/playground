import React from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const Works = () => (
	<>
		<div
			className="bg-cover header-small"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/images/works/tattoo.jpg)`,
			}}
		>
			<h1>Our works.</h1>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<div className="text-center mb-m">
					<h2 className="mb-default">Our Works.</h2>
					<h5>See all our works</h5>
				</div>
				<div className="columns-2">
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item1.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Arhitecture</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item2.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Photography</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item3.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Teaser</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item4.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Styles</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item5.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>About</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item6.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Names</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item7.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Titles</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item8.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Something</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item9.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Reaction</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/works/item10.jpg)`,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>Miscelanious</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
export default Works;

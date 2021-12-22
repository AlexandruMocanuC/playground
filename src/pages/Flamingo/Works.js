import React from 'react';
import { works } from './db';
import { PUBLIC_URL } from '~/constants/flamingo';

const Works = () => (
	<>
		<div
			className="bg-cover header-small"
			style={{
				backgroundImage: works.header.image,
			}}
		>
			<h1>{works.header.heading}</h1>
		</div>
		<div className="bg-blue section">
			<div className="container">
				<div className="text-center mb-m">
					<h2 className="mb-default">{works.content.heading}</h2>
					<h5>{works.content.description}</h5>
				</div>
				<div className="columns-2">
					<div
						style={{
							backgroundImage:
								works.content.columns.column1.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column1.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column2.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column2.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column3.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column3.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column4.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column4.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column5.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column5.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column6.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column6.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column7.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column7.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column8.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column8.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column9.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column9.heading}</h4>
						</div>
					</div>
					<div
						style={{
							backgroundImage:
								works.content.columns.column10.image,
						}}
						className="column mb-default work-height bg-cover"
					>
						<div className="overlay">
							<h4>{works.content.columns.column10.heading}</h4>
						</div>
					</div>
				</div>
			</div>
		</div>
	</>
);
export default Works;

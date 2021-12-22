import React from 'react';
import Form from '~c/Flamingo/Form';
import { contact } from './db';

import { PUBLIC_URL } from '~/constants/flamingo';

const Contact = () => (
	<>
		<div
			className="bg-cover header-small"
			style={{
				backgroundImage: contact.header.image,
			}}
		>
			<h1>{contact.header.heading}</h1>
		</div>
		<div className="bg-blue text-center section contact-section">
			<div className="container mb-l">
				<h2 className="mb-default">{contact.content.heading}</h2>
				<h5>{contact.content.description}</h5>
			</div>
			<div className="container">
				<div className="columns-3">
					<div className="column text-center p-m">
						<i className="fas fa-phone-alt icon-green mb-m"></i>
						<h4 className="mb-m">
							{contact.content.columns.column1.heading}
						</h4>
						<div className="mb-default">
							<a
								href={
									contact.content.columns.column1.buttons
										.button1.link
								}
							>
								{
									contact.content.columns.column1.buttons
										.button1.text
								}
							</a>
						</div>
						<div>
							<a
								href={
									contact.content.columns.column1.buttons
										.button2.link
								}
							>
								{
									contact.content.columns.column1.buttons
										.button2.text
								}
							</a>
						</div>
					</div>
					<div className="column text-center p-m">
						<i className="fas fa-map-marker-alt icon-green mb-m"></i>
						<h4 className="mb-m">
							{contact.content.columns.column2.heading}
						</h4>
						<div>
							<p className="mb-default">
								{contact.content.columns.column2.description}
							</p>
						</div>
					</div>
					<div className="column text-center p-m">
						<i className="fas fa-envelope-open-text icon-green mb-m"></i>
						<h4 className="mb-m">
							{contact.content.columns.column3.heading}
						</h4>
						<div>
							<a
								href={
									contact.content.columns.column3.buttons
										.button1.link
								}
								className="mb-default"
							>
								{
									contact.content.columns.column3.buttons
										.button1.text
								}
							</a>
						</div>
						<div>
							<a
								href={
									contact.content.columns.column3.buttons
										.button2.link
								}
							>
								{
									contact.content.columns.column3.buttons
										.button2.text
								}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-l text-center">
				<h2 className="mb-default">{contact.form.heading}</h2>
				<h5>{contact.form.description}</h5>
			</div>
			<div className="container">
				<Form />
			</div>
		</div>
	</>
);

export default Contact;

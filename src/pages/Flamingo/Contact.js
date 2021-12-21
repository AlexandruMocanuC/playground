import React from 'react';
import Form from '~c/Flamingo/Form';

import { PUBLIC_URL } from '~/constants/flamingo';

const Contact = () => (
	<>
		<div
			className="bg-cover header-small"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/images/map.jpg)`,
			}}
		>
			<h1>Contact us.</h1>
		</div>
		<div className="bg-blue text-center section contact-section">
			<div className="container mb-l">
				<h2 className="mb-default">Get in touch with us!</h2>
				<h5>Lorem ipsum dolor sit amet</h5>
			</div>
			<div className="container">
				<div className="columns-3">
					<div className="column text-center p-m">
						<i className="fas fa-phone-alt icon-green mb-m"></i>
						<h4 className="mb-m">PHONE</h4>
						<div className="mb-default">
							<a href="tel:1234567890">+1234567890</a>
						</div>
						<div>
							<a href="tel:0987654321">+0987654321</a>
						</div>
					</div>
					<div className="column text-center p-m">
						<i className="fas fa-map-marker-alt icon-green mb-m"></i>
						<h4 className="mb-m">ADDRESS</h4>
						<div>
							<p className="mb-default">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit.
							</p>
						</div>
					</div>
					<div className="column text-center p-m">
						<i className="fas fa-envelope-open-text icon-green mb-m"></i>
						<h4 className="mb-m">EMAIL</h4>
						<div>
							<a
								href="mailto:anymail@mail.com"
								className="mb-default"
							>
								anymail@mail.com
							</a>
						</div>
						<div>
							<a href="mailto:officialmail@mail.com">
								officialmail@mail.com
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="bg-grey section">
			<div className="container mb-l text-center">
				<h2 className="mb-default">Send us a message!</h2>
				<h5>Lorem ipsum dolor sit amet</h5>
			</div>
			<div className="container">
				<Form />
			</div>
		</div>
	</>
);

export default Contact;

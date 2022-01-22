import React, { useState } from 'react';

import Card from '~c/Contacts/Card';

import { contacts } from './db';

import $ from './style.scss';

const ContactsHome = () => {
	const colors = ['blue', 'yellow', 'red', 'green'];
	return (
		<div className={$.contacts}>
			<div className={$.mobile}>
				<h1>Contacts</h1>
				<h1 className={$.search_icon}>
					<i className="fas fa-search"></i>
				</h1>
				{contacts.map((contact, index) => (
					<Card {...contact} color={colors[index % 4]} key={index} />
				))}
			</div>
		</div>
	);
};

export default ContactsHome;

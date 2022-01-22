import React, { useState } from 'react';

import Card from '~c/Contacts/Card';

import { contacts } from './db';

import $ from './style.scss';

const ContactsHome = () => {
	const colors = ['blue', 'yellow', 'red', 'green'];
	return (
		<div className={$.contacts}>
			{contacts.map((contact, index) => (
				<Card {...contact} color={colors[index % 4]} key={index} />
			))}
		</div>
	);
};

export default ContactsHome;

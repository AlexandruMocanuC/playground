import React, { useState } from 'react';
import Card from '~c/Contacts/Card';

import Button from '~c/Contacts/Button';

import { contacts } from './db';

import $ from './style.scss';

const ContactsHome = () => {
	return (
		<div className={$.contacts}>
			{contacts.map((contact, index) => (
				<Card {...contact} key={index} />
			))}
			<Button>submit</Button>
			<Button type="grey">submit</Button>
			<Button type="red">submit</Button>
		</div>
	);
};

export default ContactsHome;

import React, { useState } from 'react';

import Card from '~c/Contacts/Card';

import { contacts } from './db';

import $ from './style.scss';

const ContactsHome = () => {
	const colors = ['blue', 'yellow', 'red', 'green'];
	const [isSearchVisible, toggleSearch] = useState(false);
	const [searchValue, setSearchValue] = useState('');

	const filteredContacts = contacts.filter(
		contact =>
			contact.name.toLowerCase().includes(searchValue.toLowerCase()) ||
			contact.city.toLowerCase().includes(searchValue.toLowerCase()) ||
			contact.country.toLowerCase().includes(searchValue.toLowerCase())
	);

	const handleSearch = () => {
		if (isSearchVisible === true) {
			setSearchValue('');
		}

		toggleSearch(!isSearchVisible);
	};

	return (
		<div className={$.contacts}>
			<div className={$.mobile}>
				<h1>Contacts</h1>
				<h1 className={$.search_icon} onClick={() => handleSearch()}>
					{isSearchVisible === true ? (
						<i className="fas fa-times"></i>
					) : (
						<i className="fas fa-search"></i>
					)}
				</h1>
				{isSearchVisible === true ? (
					<div className={$.search}>
						<input
							autoFocus
							onChange={event =>
								setSearchValue(event.target.value)
							}
							type="text"
							placeholder="Search Contacts"
						/>
					</div>
				) : null}

				{filteredContacts.length !== 0 ? (
					filteredContacts.map((contact, index) => (
						<Card
							{...contact}
							color={colors[index % 4]}
							key={index}
						/>
					))
				) : (
					<h2 className={$.no_results}>No contacts found :(</h2>
				)}
			</div>
		</div>
	);
};

export default ContactsHome;

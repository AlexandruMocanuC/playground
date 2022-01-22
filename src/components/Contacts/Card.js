import React from 'react';

import Button from '~c/Contacts/Button';

import { PUBLIC_URL } from '~/constants/contacts';

import $ from './card.scss';

const Card = ({ name, image, city, country, color }) => {
	return (
		<div className={`${$.card} ${$[color]}`}>
			<div className={$.details}>
				<h2>{name}</h2>
				<p>{city}</p>
				<p>{country}</p>
				<div className={$.button}>
					<Button type="grey" onClick={() => console.log('ceva')}>
						Show more
					</Button>
				</div>
			</div>
			<div style={{ backgroundImage: image }} className={$.image}></div>
		</div>
	);
};

export default Card;

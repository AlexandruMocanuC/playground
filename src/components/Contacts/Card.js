import React from 'react';
import Button from '~c/Contacts/Button';
import { PUBLIC_URL } from '~/constants/contacts';

import $ from './card.scss';

const Card = ({ name, image, city, country }) => {
	return (
		<div className={$.card}>
			<div className={$.image} style={{ backgroundImage: image }} />
			<div className={$.info}>
				<h2>{name}</h2>
				<p>{city}</p>
				<p>{country}</p>
			</div>
			<div className={$.button}>
				<Button type="grey">see more</Button>
			</div>
		</div>
	);
};

export default Card;

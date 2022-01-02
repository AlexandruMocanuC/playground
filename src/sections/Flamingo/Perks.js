import React from 'react';
import { perks } from './db';

const Perks = () => (
	<div className="columns-3">
		{perks.map((perk, index) => (
			<div className="column p-m" key={index}>
				<div className="width-80">
					<i className={perk.icon}></i>
					<h4 className="mb-default">{perk.heading}</h4>
					<p>{perk.description}</p>
				</div>
			</div>
		))}
	</div>
);
export default Perks;

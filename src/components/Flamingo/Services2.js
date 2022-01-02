import React from 'react';
import { services } from './db';
const Services2 = () => (
	<div className="columns-3">
		{services.map((item, index) => (
			<div className="column bg-grey p-m b-hover" key={index}>
				<i className={item.icon}></i>
				<h3>{item.heading}</h3>
				<div className="separator"></div>
				<div className="width-80">
					<p>{item.description}</p>
				</div>
			</div>
		))}
	</div>
);
export default Services2;

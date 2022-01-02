import React from 'react';
import { customers } from './db';
const Customers = () => (
	<div className="flex-between">
		{customers.map((item, index) => (
			<i className={item} key={index}></i>
		))}
	</div>
);
export default Customers;

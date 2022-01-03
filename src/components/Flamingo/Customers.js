import React from 'react';
const Customers = ({ customers }) => (
	<div className="flex-between">
		{customers.map((item, index) => (
			<i className={item} key={index}></i>
		))}
	</div>
);
export default Customers;

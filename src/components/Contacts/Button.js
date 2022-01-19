import React from 'react';
import $ from './button.scss';

const Button = ({ type = 'default', children }) => {
	return type === 'grey' ? (
		<div className={$.button_grey}>{children}</div>
	) : type === 'red' ? (
		<div className={$.button_red}>{children}</div>
	) : (
		<div className={$.button}>{children}</div>
	);
};

export default Button;

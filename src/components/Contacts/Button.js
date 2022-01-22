import React from 'react';

import $ from './button.scss';

const Button = ({ type = 'default', children, onClick = () => {} }) => {
	return type === 'red' ? (
		<div onClick={() => onClick()} className={$.button_red}>
			{children}
		</div>
	) : type === 'grey' ? (
		<div onClick={() => onClick()} className={$.button_grey}>
			{children}
		</div>
	) : (
		<div onClick={() => onClick()} className={$.button}>
			{children}
		</div>
	);
};

export default Button;

import React, { useState } from 'react';

import $ from './style.scss';

const ContactsHome = () => {
	return (
		<div className={$.contacts}>
			<div className={$.button}>Submit</div>
			<div className={$.button_red}>Submit</div>
			<div className={$.button_grey}>Submit</div>
		</div>
	);
};

export default ContactsHome;

import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Outlet } from 'react-router-dom';

import { base } from '~/constants/contacts';

import Home from './Home';

export const routes = [{ index: true, element: <Home /> }];

const Contacts = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Montserrat+Alternates:400,700'],
			},
		});

		import('./style.scss');
	}, []);

	return (
		<b>
			<Outlet />
		</b>
	);
};

export default Contacts;

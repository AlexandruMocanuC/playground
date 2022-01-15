import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Outlet } from 'react-router-dom';

import { base } from '~/constants/forest';
import Home from './Home';

export const routes = [{ index: true, element: <Home /> }];

const Forest = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Open+Sans:400,700'],
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

export default Forest;

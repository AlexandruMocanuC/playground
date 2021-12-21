import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

import Home from '~/pages/Home';
import Flamingo, { routes as flamingoRoutes } from '~/pages/Flamingo';

import { base } from '~/constants';

const routes = [
	{
		path: base,
		element: <Home />,
	},
	{
		path: `${base}flamingo/`,
		element: <Flamingo />,
		children: flamingoRoutes,
	},
];

const Routes = () => useRoutes(routes);

export default Routes;

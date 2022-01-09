import React from 'react';
import { useRoutes, Outlet } from 'react-router-dom';

import Home from '~/pages/Home';
import Flamingo, { routes as flamingoRoutes } from '~/pages/Flamingo';
import Travel, { routes as travelRoutes } from '~/pages/Travel';
import Houses, { routes as housesRoutes } from '~/pages/Houses';

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
	{
		path: `${base}travel/`,
		element: <Travel />,
		children: travelRoutes,
	},
	{
		path: `${base}houses/`,
		element: <Houses />,
		children: housesRoutes,
	},
];

const Routes = () => useRoutes(routes);

export default Routes;
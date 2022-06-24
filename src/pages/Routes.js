import React from "react";
import { useRoutes, Outlet } from "react-router-dom";

import Home from "~/pages/Home";
import Flamingo, { routes as flamingoRoutes } from "~/pages/Flamingo";
import Travel, { routes as travelRoutes } from "~/pages/Travel";
import Houses, { routes as housesRoutes } from "~/pages/Houses";
import Forest, { routes as forestRoutes } from "~/pages/Forest";
import Contacts, { routes as contactsRoutes } from "~/pages/Contacts";
import Rating from "~/pages/Rating";
import Faq from "~/pages/Faq";

import { base } from "~/constants";

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
	{
		path: `${base}forest/`,
		element: <Forest />,
		children: forestRoutes,
	},
	{
		path: `${base}contacts/`,
		element: <Contacts />,
		children: contactsRoutes,
	},
	{
		path: `${base}rating/`,
		element: <Rating />,
	},
	{
		path: `${base}faq/`,
		element: <Faq />,
	},
];

const Routes = () => useRoutes(routes);

export default Routes;

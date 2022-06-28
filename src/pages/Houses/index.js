import React, { useEffect } from "react";
import WebFont from "webfontloader";

import { Outlet } from "react-router-dom";

import { base } from "~/constants/houses";

import Home from "./Home";

export const routes = [{ index: true, element: <Home /> }];

const Houses = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Montserrat+Alternates:400,700"],
			},
		});
	}, []);

	return (
		<b>
			<Outlet />
		</b>
	);
};

export default Houses;

import React, { useEffect } from "react";
import WebFont from "webfontloader";

import { Outlet } from "react-router-dom";

import { base } from "~/constants/travel";

import Home from "./Home";

export const routes = [{ index: true, element: <Home /> }];

const Travel = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Varela+Round"],
			},
		});
	}, []);

	return (
		<b>
			<Outlet />
		</b>
	);
};

export default Travel;

import React, { useEffect } from 'react';
import WebFont from 'webfontloader';

import { Outlet } from 'react-router-dom';

import { base } from '~/constants/flamingo';

import Navigation from '~c/Flamingo/Navigation';
import Footer from '~s/Flamingo/Footer';
import Home from './Home';
import Services from './Services';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Blog from './Blog';
import Article from './Article';

export const routes = [
	{ index: true, element: <Home /> },
	{
		path: `services/`,
		element: <Services />,
	},
	{
		path: `about/`,
		element: <About />,
	},
	{
		path: 'works/',
		element: <Works />,
	},
	{
		path: 'contact/',
		element: <Contact />,
	},
	{
		path: 'blog/',
		element: <Blog />,
	},
	{
		path: 'article/',
		element: <Article />,
	},
];

const Flamingo = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ['Poppins:400,800', 'Roboto:400'],
			},
		});

		import('./style.scss');
	}, []);

	return (
		<b>
			<Navigation />
			<Outlet />
			<Footer />
		</b>
	);
};

export default Flamingo;

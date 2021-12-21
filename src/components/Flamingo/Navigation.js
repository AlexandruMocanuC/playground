import React, { useEffect } from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

import { base, PUBLIC_URL } from '~/constants/flamingo';

const Navigation = () => {
	useEffect(() => {
		import('./navigation.css');
	}, []);
	return (
		<div className="navigation">
			<div className="logo">
				<Link to={base}>
					<img src={`${PUBLIC_URL}/images/logo.png`} />
				</Link>
			</div>
			<div className="flex navigation-menus">
				<div className="menu">
					<Link to={base} className="menu-item">
						home
					</Link>
					<Link to={`${base}services`} className="menu-item">
						services
					</Link>
					<Link to={`${base}works`} className="menu-item">
						works
					</Link>
					<Link to={`${base}about`} className="menu-item">
						about
					</Link>
					<a href="#" className="menu-item">
						blog
					</a>
					<Link to={`${base}contact`} className="button">
						contact
					</Link>
				</div>
				<div className="search">
					<a href="#">
						<i className="fas fa-search"></i>
					</a>
				</div>
			</div>
		</div>
	);
};
export default Navigation;

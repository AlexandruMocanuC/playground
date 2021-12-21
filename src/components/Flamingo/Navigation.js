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
			<div className="menu flex">
				<div className="menu-item">
					<Link to={base}>home</Link>
				</div>
				<div className="menu-item">
					<Link to={`${base}services`}>services</Link>
				</div>
				<div className="menu-item">
					<Link to={`${base}works`}>works</Link>
				</div>
				<div className="menu-item">
					<Link to={`${base}about`}>about</Link>
				</div>
				<div className="menu-item">
					<a href="#">blog</a>
				</div>
				<div>
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

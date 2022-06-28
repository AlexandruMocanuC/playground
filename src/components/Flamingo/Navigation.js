import React, { useState } from "react";
import { Link, useResolvedPath, useMatch } from "react-router-dom";

import { base } from "~/constants/flamingo";
import { nav } from "./db";

import $ from "./navigation.css";

const Navigation = () => {
	const [search, toggleSearch] = useState(false);

	return (
		<div className={$.navigation}>
			<div className={$.logo}>
				<Link to={base}>
					<img src={nav.logo} />
				</Link>
			</div>

			<div className={`${$.menu} ${$.flex}`}>
				{nav.menu.map((item, index) => {
					let resolved = useResolvedPath(item.link);
					let match = useMatch({
						path: resolved.pathname,
						end: true,
					});

					return (
						<div
							className={
								match !== null
									? $.menu_item_active
									: $.menu_item
							}
							key={index}
						>
							<Link to={item.link}>{item.text}</Link>
						</div>
					);
				})}
				<div>
					<Link to={nav.contact.link} className={$.button}>
						{nav.contact.text}
					</Link>
				</div>
				{nav.search === true ? (
					<div
						className={$.search}
						onClick={() => toggleSearch(!search)}
					>
						<a href="#">
							<i className="fas fa-search"></i>
						</a>
					</div>
				) : null}

				{search === true ? "search is on" : ""}
			</div>
		</div>
	);
};
export default Navigation;

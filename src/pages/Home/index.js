import React, { useEffect } from "react";
import WebFont from "webfontloader";
import { Link } from "react-router-dom";

import { base } from "~/constants";

const isProduction = process.env.NODE_ENV === "production";
const PUBLIC_URL = isProduction ? `${base}/static/home` : "/home";

import $ from "./style.scss";

const Home = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Crimson+Text:400,700", "Raleway:400,700"],
			},
		});
	}, []);

	const projects = [
		{
			image: `url(${PUBLIC_URL}/Rating.jpg)`,
			name: "Rating component",
			url: `${base}rating/`,
		},
		{
			image: `url(${PUBLIC_URL}/Flamingo.jpg)`,
			name: "Digital agency website",
			url: `${base}flamingo/`,
		},
		{
			image: `url(${PUBLIC_URL}/Faq.jpg)`,
			name: "Faq section",
			url: `${base}faq/`,
		},
		{
			image: `url(${PUBLIC_URL}/Houses.jpg)`,
			name: "Log houses website",
			url: `${base}houses/`,
		},
		{
			image: `url(${PUBLIC_URL}/Contacts.jpg)`,
			name: "Contacts",
			url: `${base}contacts/`,
		},
		{
			image: `url(${PUBLIC_URL}/Travel.jpg)`,
			name: "Traveling guides",
			url: `${base}travel/`,
		},
	];

	return (
		<div className={$.container}>
			<div className={$.header}>
				<div className={$.row}>
					<div className={$.subrow}>
						<div className={$.heading}>
							Hi, I’m Matt. Nice to meet you.
						</div>
						<div className={$.intro}>
							Since beginning my journey as a freelance designer
							nearly 10 years ago, I've done remote work for
							agencies, consulted for startups, and collaborated
							with talented people to create digital products for
							both business and consumer use. I'm quietly
							confident, naturally curious, and perpetually
							working on improving my chops one design problem at
							a time.
						</div>
					</div>
				</div>
			</div>
			<div className={$.content}>
				<div className={$.row}>
					<div className={$.section_heading}>My Recent Work</div>
					<div className={$.paragraph}>
						Here are a few design projects I've worked on recently.
						Want to see more?{" "}
						<a
							href="mailto:alexandru.mocanu.dev@gmail.com"
							className={$.button}
						>
							Email me
						</a>
						.
					</div>
					<div className={$.columns}>
						{projects.map((project, index) => (
							<div className={$.column} key={index}>
								<Link className={$.link} to={project.url}>
									<div className={$.project_wrapper}>
										<div
											className={$.project}
											style={{
												backgroundImage: project.image,
											}}
										></div>
									</div>
									<div className={$.project_name}>
										{project.name}
										<i
											className={`fas fa-chevron-right ${$.icon}`}
										></i>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
			<div className={$.footer}>
				<div className={$.row}>
					<div className={$.contacts}>
						<a href="tel:+40727729068">+40727 729 068</a>
						<a href="mailto:alexandru.mocanu.dev@gmail.com">
							alexandru.mocanu.dev@gmail.com
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

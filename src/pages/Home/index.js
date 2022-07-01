import React, { useEffect, useRef } from "react";
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

	const content = useRef(null);
	const executeScroll = () =>
		content.current.scrollIntoView({ behavior: "smooth" });

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
		{
			image: `url(${PUBLIC_URL}/Qr.jpg)`,
			name: "Qr component",
			url: `${base}qr/`,
		},
		{
			image: `url(${PUBLIC_URL}/Todo.jpg)`,
			name: "Shopping list",
			url: `${base}todo/`,
		},
	];

	return (
		<div className={$.container}>
			<div className={$.header}>
				<div className={$.row}>
					<div className={$.heading}>
						Hi, I’m Alex. Nice to meet you.
					</div>
					<div className={$.intro}>
						<div className={$.point}>The things I know:</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> experience
							developing HTML & CSS templates
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> experience
							developing JavaScript based UIs
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> experience
							developing React components
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> experience using
							pre-processors PostCSS (CSS Modules), SASS / LESS
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> experience with
							CSS-in-JS Styled Components and Style JSX
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> knowledge of style
							guide development and pattern libraries
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> knowledge of
							component-based architecture
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> cross-browser
							responsive design with a mobile first approach
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> basic
							understanding of UI/UX design principles
						</div>
						<div className={$.point}>
							<i className="fas fa-circle"></i> writing clean code
							following industry standards (using prettier)
						</div>
					</div>
				</div>
				<div className={$.scroll} onClick={executeScroll}>
					<i className="fas fa-chevron-down"></i>
				</div>
			</div>
			<div className={$.content} ref={content}>
				<div className={$.row}>
					<div className={$.section_heading}>My Playground</div>
					<div className={$.paragraph}>
						Here are a few small projects I've worked on for my
						portfolio. Want to work together?{" "}
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

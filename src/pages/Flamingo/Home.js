import React from "react";

import { Link } from "react-router-dom";

import News from "~s/Flamingo/News.js";
import Testimonials from "~s/Flamingo/Testimonials.js";
import About from "~s/Flamingo/About.js";
import Works from "~s/Flamingo/Works.js";
import Services from "~s/Flamingo/Services.js";
import Services2 from "~c/Flamingo/Services2.js";

import { home, customers, testimonials } from "./db";

import $ from "./style.scss";

const FlamingoHome = () => (
	<div className={$.flamingo}>
		<div className={`${$.header} ${$.bg_black} ${$.section}`}>
			<div
				className={`${$.container} ${$.bg_cover}`}
				style={{
					backgroundImage: home.header.image,
				}}
			>
				<div className={`${$.width_50} ${$.mb_l}`}>
					<div className={`${$.mb_m} ${$.h5}`}>
						{home.header.description}
					</div>
					<div className={`${$.mb_m} ${$.h1}`}>
						{home.header.heading}
					</div>
					<a href="#" className={$.button}>
						{home.header.button}
					</a>
				</div>
				<Services2 />
			</div>
		</div>
		<div className={`${$.bg_blue} ${$.section}`}>
			<div className={$.container}>
				<div className={`${$.mb_default} ${$.h2}`}>
					<span className={$.separator} />
					{home.services.heading}
				</div>
				<div className={`${$.mb_l} ${$.h5}`}>
					{home.services.description}
				</div>
				<Services />
			</div>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={`${$.container} ${$.flex_between} ${$.mb_l}`}>
				<div>
					<div className={`${$.mb_default} ${$.h2}`}>
						<span className={$.separator}></span>
						{home.works.heading}{" "}
					</div>
					<div className={$.h5}>{home.works.description}</div>
				</div>
				<Link to={home.works.button.link} className={$.button}>
					{home.works.button.text}
				</Link>
			</div>
			<Works />
		</div>
		<div className={`${$.bg_blue} ${$.section} ${$.about_section}`}>
			<div className={$.container}>
				<div className={`${$.mb_default} ${$.h2}`}>
					<span className={$.separator}></span>
					{home.about.heading}
				</div>
				<div className={`${$.mb_m} ${$.h5}`}>
					{home.about.description}
				</div>
				<About />
			</div>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={`${$.container} ${$.mb_m}`}>
				<div className={`${$.mb_default} ${$.h2}`}>
					<span className={$.separator}></span>
					{home.testimonials.heading}
				</div>
				<div className={$.h5}>{home.testimonials.description}</div>
			</div>
			<Testimonials testimonials={testimonials} />
			<div className={$.container}>
				<div className={$.flex_between}>
					{customers.map((item, index) => (
						<i
							className={`${item} ${$.icon_white}`}
							key={index}
						></i>
					))}
				</div>
			</div>
		</div>
		<News />
	</div>
);

export default FlamingoHome;

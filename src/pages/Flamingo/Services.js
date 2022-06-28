import React from "react";

import Services from "~s/Flamingo/Services.js";
import Progress from "~c/Flamingo/Progress.js";
import { services } from "./db";

import { Link } from "react-router-dom";

import $ from "./style.scss";

const ServicesPage = () => (
	<div className={$.services_page}>
		<div
			className={`${$.header_small} ${$.bg_cover}`}
			style={{
				backgroundImage: services.header.image,
			}}
		>
			<div className={$.h1}>{services.header.heading}</div>
		</div>
		<div className={`${$.bg_blue} ${$.section}`}>
			<div className={`${$.container} ${$.text_center} ${$.mb_l}`}>
				<div className={`${$.mb_default} ${$.h2}`}>
					{services.ourServices.heading}
				</div>
				<div className={$.h5}>{services.ourServices.description}</div>
			</div>
			<div className={$.container}>
				<Services />
			</div>
		</div>
		<div
			className={`${$.bg_cover} ${$.bg_fixed} ${$.section} ${$.text_center}`}
			style={{
				backgroundImage: services.works.image,
			}}
		>
			<div className={`${$.mb_m} ${$.h2}`}>{services.works.heading}</div>
			<Link to={services.works.button.link} className={$.button}>
				{services.works.button.text}
			</Link>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={$.container}>
				<div className={$.columns_2}>
					<div className={$.column}>
						<div className={$.width_80}>
							<div className={`${$.mb_m} ${$.h2}`}>
								{services.skills.heading}
							</div>
							<p>{services.skills.description}</p>
						</div>
					</div>
					<div className={$.column}>
						<div className={$.width_80}>
							<Progress />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default ServicesPage;

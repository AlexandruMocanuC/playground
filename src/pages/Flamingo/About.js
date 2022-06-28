import React from "react";

import Progress from "~c/Flamingo/Progress.js";
import Perks from "~s/Flamingo/Perks.js";
import Team from "~s/Flamingo/Team.js";
import { about } from "./db";

import { PUBLIC_URL } from "~/constants/flamingo";

import $ from "./style.scss";

const AboutPage = () => (
	<div className={$.about_page}>
		<div
			className={`${$.header_small} ${$.bg_cover}`}
			style={{
				backgroundImage: about.header.image,
			}}
		>
			<div className={$.text_center}>
				<div className={$.h1}>{about.header.heading}</div>
			</div>
		</div>
		<div className={`${$.bg_blue} ${$.section}`}>
			<div className={$.container}>
				<Perks />
			</div>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={$.container}>
				<div className={$.columns_2}>
					<div className={$.column}>
						<div className={$.width_80}>
							<div className={`${$.mb_m} ${$.h2}`}>
								{about.skills.heading}
							</div>
							<p className={$.mb_m}>{about.skills.description}</p>
							<Progress />
						</div>
					</div>
					<div
						className={`${$.column} ${$.bg_cover}`}
						style={{
							backgroundImage: about.skills.image,
						}}
					></div>
				</div>
			</div>
		</div>
		<div className={`${$.bg_blue} ${$.section}`}>
			<div className={$.container}>
				<div className={$.columns_2}>
					<div
						className={`${$.column} ${$.bg_cover}`}
						style={{
							backgroundImage: about.video.image,
						}}
					></div>
					<div className={$.column}>
						<div className={$.p_m}>
							<div className={`${$.mb_m} ${$.h2}`}>
								{about.video.heading}
							</div>
							<p className={$.mb_m}>{about.video.description}</p>
							<a href="#" className={$.button}>
								<i
									className={`fas fa-play ${$.mr_default}`}
								></i>
								{about.video.button.text}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={`${$.container} ${$.mb_l}`}>
				<div className={`${$.mb_default} ${$.h2}`}>
					<span className={$.separator}></span>
					{about.team.heading}
				</div>
				<div className={$.h5}>{about.team.description}</div>
			</div>
			<Team />
		</div>
	</div>
);

export default AboutPage;

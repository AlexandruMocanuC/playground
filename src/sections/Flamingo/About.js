import React from "react";
import { about } from "./db";
import { PUBLIC_URL } from "~/constants/flamingo";

import $ from "./about.css";

const About = () => (
	<>
		<div className={`${$.columns_2} ${$.mb_default}`}>
			<div
				className={`${$.column} ${$.bg_cover}`}
				style={{
					backgroundImage: about.columns.column1.image,
				}}
			>
				<div className={$.overlay}></div>
				<div className={$.details}>
					<div className={`${$.mb_default} ${$.h4}`}>
						{about.columns.column1.heading}
					</div>
					<p>{about.columns.column1.description}</p>
				</div>
			</div>
			<div className={$.column}>
				<div className={$.columns_2_v}>
					<div
						className={`${$.column} ${$.bg_cover}`}
						style={{
							backgroundImage: about.columns.column2.image,
						}}
					>
						<div className={$.overlay}></div>
						<div className={$.details}>
							<div className={`${$.mb_default} ${$.h4}`}>
								{about.columns.column2.heading}
							</div>
							<p>{about.columns.column2.description}</p>
						</div>
					</div>
					<div
						className={`${$.column} ${$.bg_cover}`}
						style={{
							backgroundImage: about.columns.column3.image,
						}}
					>
						<div className={$.overlay}></div>
						<div className={$.details}>
							<div className={`${$.mb_default} ${$.h4}`}>
								{about.columns.column3.heading}
							</div>
							<p>{about.columns.column3.description}</p>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={$.columns_3}>
			{about.details.map((detail, index) => (
				<div className={`${$.column} ${$.p_default}`} key={index}>
					<div className={$.width_80}>
						<div className={`${$.mb_default} ${$.h4}`}>
							{detail.heading}
						</div>
						<p>{detail.description}</p>
					</div>
				</div>
			))}
		</div>
	</>
);

export default About;

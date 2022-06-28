import React from "react";

import $ from "./services.css";

const Services = () => (
	<div className={$.columns_3}>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i className={`fas fa-chart-bar ${$.icon_green} ${$.mb_m}`}></i>
				<div className={`${$.h3} ${$.mb_m}`}>Digital Strategy</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i className={`fas fa-pen ${$.icon_green} ${$.mb_m}`}></i>
				<div className={`${$.h3} ${$.mb_m}`}>UX Designs</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i
					className={`fas fa-user-friends ${$.icon_green} ${$.mb_m}`}
				></i>
				<div className={`${$.h3} ${$.mb_m}`}>UI Designs</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i
					className={`fas fa-globe-europe ${$.icon_green} ${$.mb_m}`}
				></i>
				<div className={`${$.h3} ${$.mb_m}`}>Social Media</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i className={`far fa-bookmark ${$.icon_green} ${$.mb_m}`}></i>
				<div className={`${$.h3} ${$.mb_m}`}>Design Concept</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
		<div
			className={`${$.column} ${$.p_m} ${$.bb_white} ${$.bg_grey} ${$.bg_hover}`}
		>
			<div className={$.width_80}>
				<i
					className={`fas fa-chart-area ${$.icon_green} ${$.mb_m}`}
				></i>
				<div className={`${$.h3} ${$.mb_m}`}>Media Pairing</div>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Cras id arcu luctus.
				</p>
			</div>
		</div>
	</div>
);

export default Services;

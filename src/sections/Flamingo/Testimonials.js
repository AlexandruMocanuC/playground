import React from "react";

import $ from "./testimonials.css";

const Testimonials = ({ testimonials }) => (
	<div className={$.testimonials_section}>
		{testimonials.map((item, index) => (
			<div className={$.column} key={index}>
				<div className={`${$.bg_blue} ${$.p_m} ${$.b_white}`}>
					<i
						className={`fas fa-quote-right ${$.mb_default} ${$.icon_green}`}
					></i>
					<p className={$.mb_m}>{item.description}</p>
					<div className={$.mb_m}>
						<i className={`fas fa-star ${$.icon_star}`}></i>
						<i className={`fas fa-star ${$.icon_star}`}></i>
						<i className={`fas fa-star ${$.icon_star}`}></i>
						<i className={`fas fa-star ${$.icon_star}`}></i>
						<i className={`fas fa-star ${$.icon_star}`}></i>
					</div>
					<div
						className={`${$.avatar} ${$.mb_default}`}
						style={{
							backgroundImage: item.avatar,
						}}
					></div>
					<div>
						<div className={`${$.mb_default} ${$.h4}`}>
							{item.name}
						</div>
						<p>{item.position}</p>
					</div>
				</div>
			</div>
		))}
	</div>
);

export default Testimonials;

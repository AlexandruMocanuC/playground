import React from "react";
import { services } from "./db";

import $ from "./services2.css";

const Services2 = () => (
	<div className={$.columns_3}>
		{services.map((item, index) => (
			<div
				className={`${$.column} ${$.bg_grey} ${$.p_m} ${$.b_hover}`}
				key={index}
			>
				<i className={`${item.icon} ${$.mb_m} ${$.icon_green}`}></i>
				<div className={$.h3}>{item.heading}</div>
				<div className={$.separator}></div>
				<div className={$.width_80}>
					<p>{item.description}</p>
				</div>
			</div>
		))}
	</div>
);
export default Services2;

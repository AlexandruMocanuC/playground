import React from "react";
import { perks } from "./db";

import $ from "./perks.css";

const Perks = () => (
	<div className={$.columns_3}>
		{perks.map((perk, index) => (
			<div className={`${$.column} ${$.p_m}`} key={index}>
				<div className={$.width_80}>
					<i
						className={`${perk.icon} ${$.icon_green} ${$.mb_default}`}
					></i>
					<div className={`${$.mb_default} ${$.h4}`}>
						{perk.heading}
					</div>
					<p>{perk.description}</p>
				</div>
			</div>
		))}
	</div>
);
export default Perks;

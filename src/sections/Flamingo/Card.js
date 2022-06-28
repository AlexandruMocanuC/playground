import React from "react";
import { Link } from "react-router-dom";

import $ from "./card.css";

const Card = ({ item }) => (
	<>
		<div className={$.w_100}>
			<div
				className={`${$.pt_100} ${$.bg_cover}`}
				style={{
					backgroundImage: item.image,
				}}
			></div>
		</div>
		<div className={$.p_default}>
			<p className={$.mb_default}>{item.heading}</p>
			<p className={$.mb_default}>{item.description}</p>
			<Link to={item.button} className={$.button_small}>
				read more
			</Link>
		</div>
	</>
);
export default Card;

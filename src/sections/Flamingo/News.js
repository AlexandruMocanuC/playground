import React from "react";
import { news } from "./db";
import Card from "./Card";

import $ from "./news.css";

const News = () => (
	<div className={`${$.bg_blue} ${$.section}`}>
		<div className={`${$.container} ${$.text_center} ${$.mb_l}`}>
			<div className={`${$.mb_default} ${$.h2}`}>Latest News.</div>
			<div className={$.h5}>Check Out Some of Our News</div>
		</div>
		<div className={$.columns_3}>
			{news.map((item, index) => (
				<div key={index} className={`${$.column} ${$.b_white}`}>
					<Card item={item} key={index} />
				</div>
			))}
		</div>
	</div>
);
export default News;

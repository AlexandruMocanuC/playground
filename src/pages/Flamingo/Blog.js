import React from "react";
import { blog } from "./db";
import Card from "~s/Flamingo/Card";

import $ from "./style.scss";

const Blog = () => (
	<>
		<div
			className={`${$.bg_cover} ${$.header_small}`}
			style={{
				backgroundImage: blog.header.image,
			}}
		>
			<div className={$.h1}>{blog.header.heading}</div>
		</div>
		<div className={`${$.bg_blue} ${$.section}`}>
			<div className={$.container}>
				<div className={`${$.text_center} ${$.mb_l}`}>
					<div className={`${$.mb_default} ${$.h2}`}>
						{blog.heading}
					</div>
					<div className={$.h5}>{blog.description}</div>
				</div>
				<div>
					<div className={$.columns_3}>
						{blog.articles.map((article, index) => (
							<Card key={index} item={article} />
						))}
					</div>
				</div>
			</div>
		</div>
	</>
);
export default Blog;

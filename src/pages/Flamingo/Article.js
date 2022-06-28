import React from "react";
import { article } from "./db";

import $ from "./style.scss";

const Article = () => (
	<>
		<div
			className={`${$.bg_cover} ${$.header_article} ${$.section}`}
			style={{
				backgroundImage: article.header.image,
			}}
		>
			<div className={$.overlay}></div>
			<div className={$.container}>
				<div className={`${$.mb_m} ${$.h5}`}>
					{article.header.category}
				</div>
				<div className={$.h2}>{article.header.heading}</div>
			</div>
		</div>
		<div className={`${$.bg_blue} ${$.section} ${$.article}`}>
			<div className={$.container}>
				<div className={$.sidebar}>
					{article.content.sidebar.details.map((item, index) => (
						<div
							className={`${$.detail} ${$.bb_white}`}
							key={index}
						>
							<div className={`${$.mb_default} ${$.h5}`}>
								{item.heading}
							</div>
							<p>{item.description}</p>
						</div>
					))}
					<div className={$.social_media_small}>
						{article.content.sidebar.socialMedia.map(
							(item, index) => (
								<a href={item.link}>
									<i className={item.icon}> </i>
								</a>
							)
						)}
					</div>
				</div>
				<div className={$.main}>
					{article.content.main.map((element, index) => {
						if (element.type === "paragraph") {
							return (
								<p className={$.mb_default} key={index}>
									{element.content}
								</p>
							);
						} else if (element.type === "heading") {
							return (
								<div
									className={`${$.mb_default} ${$.mt_m} ${$.h3}`}
									key={index}
								>
									{element.content}
								</div>
							);
						} else if (element.type === "description") {
							return (
								<p
									className={`${$.uppercase} ${$.mb_default}`}
									key={index}
								>
									{element.content}
								</p>
							);
						} else
							return (
								<img
									className={`${$.mb_default} ${$.mt_m}`}
									key={index}
									src={element.content}
								/>
							);
					})}
				</div>
			</div>
		</div>
	</>
);
export default Article;

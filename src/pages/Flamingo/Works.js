import React, { useState } from "react";
import { works } from "./db";

import $ from "./style.scss";

const Works = () => {
	const [category, setCategory] = useState(null);

	const filteredWorks =
		category === null
			? works.content.columns
			: works.content.columns.filter(
					column => column.category === category
			  );

	const categories = [];

	works.content.columns.forEach(column =>
		categories.includes(column.category)
			? null
			: categories.push(column.category)
	);

	return (
		<>
			<div
				className={`${$.bg_cover} ${$.header_small}`}
				style={{
					backgroundImage: works.header.image,
				}}
			>
				<div className={$.h1}>{works.header.heading}</div>
			</div>
			<div className={`${$.bg_blue} ${$.section}`}>
				<div className={$.container}>
					<div className={`${$.text_center} ${$.mb_m}`}>
						<div className={`${$.mb_default} ${$.h2}`}>
							{works.content.heading}
						</div>
						<div className={`${$.mb_m} ${$.h5}`}>
							{works.content.description}
						</div>
						<div className={$.categories}>
							<div
								className={$.button}
								onClick={() => setCategory(null)}
							>
								ALL
							</div>
							{categories.map((category, index) => (
								<div
									className={$.button}
									key={index}
									onClick={() => setCategory(category)}
								>
									{category}
								</div>
							))}
						</div>
					</div>
					<div className={$.columns_2}>
						{filteredWorks.map((column, index) => (
							<div
								style={{
									backgroundImage: column.image,
								}}
								className={`${$.column} ${$.mb_default} ${$.work_height} ${$.bg_cover}`}
								key={index}
							>
								<div className={$.overlay}>
									<div className={$.h4}>{column.heading}</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
export default Works;

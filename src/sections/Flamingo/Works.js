import React from "react";
import { works } from "./db";

import { PUBLIC_URL } from "~/constants/flamingo";

import $ from "./works.css";

const Works = () => (
	<div className={$.works}>
		{works.map((work, index) => (
			<div
				className={$.work}
				style={{
					backgroundImage: work.image,
				}}
				key={index}
			>
				<div className={$.overlay}>
					<div className={$.h4}>{work.name}</div>
				</div>
			</div>
		))}
	</div>
);

export default Works;

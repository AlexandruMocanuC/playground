import React from "react";
import { progress } from "./db";

import $ from "./progress.css";

const Progress = () => (
	<>
		{progress.map((item, index) => (
			<div className={`${$.progress_bar} ${$[item.classes]}`} key={index}>
				<div className={$.h4}>{item.name}</div>
				<div className={$.h4}>{item.percentage}</div>
			</div>
		))}
	</>
);

export default Progress;

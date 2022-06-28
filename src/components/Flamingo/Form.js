import React from "react";

import $ from "./form.css";

const Form = () => (
	<div className={$.form}>
		<div className={$.columns_2}>
			<div className={$.column}>
				<input type="text" placeholder="First Name" />
			</div>
			<div className={$.column}>
				<input type="text" placeholder="Last Name" />
			</div>
			<div className={$.column}>
				<input type="email" placeholder="Email" />
			</div>
			<div className={$.column}>
				<input type="text" placeholder="Subject" />
			</div>
		</div>
		<div className={$.mb_default}>
			<textarea rows="4" placeholder="Your message here"></textarea>
		</div>
		<div className={$.text_center}>
			<a href="#" className={$.button}>
				send message
			</a>
		</div>
	</div>
);

export default Form;

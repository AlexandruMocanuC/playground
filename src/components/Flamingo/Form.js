import React, { useEffect } from 'react';
const Form = () => {
	useEffect(() => {
		import('./form.css');
	}, []);
	return (
		<div className="form">
			<div className="columns-2">
				<div className="column mb-default">
					<input type="text" placeholder="First Name" />
				</div>
				<div className="column mb-default">
					<input type="text" placeholder="Last Name" />
				</div>
				<div className="column mb-default">
					<input type="email" placeholder="Email" />
				</div>
				<div className="column mb-default">
					<input type="text" placeholder="Subject" />
				</div>
			</div>
			<div className="mb-default">
				<textarea rows="4" placeholder="Your message here"></textarea>
			</div>
			<div className="text-center">
				<a href="#" className="button">
					send message
				</a>
			</div>
		</div>
	);
};
export default Form;

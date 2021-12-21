import React, { useEffect } from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const Testimonials = () => {
	useEffect(() => {
		import('./testimonials.css');
	});
	return (
		<div className="columns-4 mb-l testimonials-section">
			<div className="column text-center">
				<div className="bg-blue p-m b-white">
					<i className="fas fa-quote-right mb-default icon-green"></i>
					<p className="mb-m">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque consequat bibendum turpis sit amet pretium. Nunc
						ut dui ornare, vulputate augue sed, varius velit.
					</p>
					<div className="mb-m">
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
					</div>
					<div
						className="avatar bg-cover mb-default"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/avatar.jpg)`,
						}}
					></div>
					<div>
						<h4 className="mb-default">John Doe</h4>
						<p>Web developer</p>
					</div>
				</div>
			</div>
			<div className="column text-center">
				<div className="bg-blue p-m b-white">
					<i className="fas fa-quote-right mb-default icon-green"></i>
					<p className="mb-m">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque consequat bibendum turpis sit amet pretium. Nunc
						ut dui ornare, vulputate augue sed, varius velit.
					</p>
					<div className="mb-m">
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
					</div>
					<div
						className="avatar bg-cover mb-default"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/avatar.jpg)`,
						}}
					></div>
					<div>
						<h4 className="mb-default">John Doe</h4>
						<p>Web developer</p>
					</div>
				</div>
			</div>
			<div className="column text-center">
				<div className="bg-blue p-m b-white">
					<i className="fas fa-quote-right mb-default icon-green"></i>
					<p className="mb-m">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque consequat bibendum turpis sit amet pretium. Nunc
						ut dui ornare, vulputate augue sed, varius velit.
					</p>
					<div className="mb-m">
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
					</div>
					<div
						className="avatar bg-cover mb-default"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/avatar.jpg)`,
						}}
					></div>
					<div>
						<h4 className="mb-default">John Doe</h4>
						<p>Web developer</p>
					</div>
				</div>
			</div>
			<div className="column text-center">
				<div className="bg-blue p-m b-white">
					<i className="fas fa-quote-right mb-default icon-green"></i>
					<p className="mb-m">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Quisque consequat bibendum turpis sit amet pretium. Nunc
						ut dui ornare, vulputate augue sed, varius velit.
					</p>
					<div className="mb-m">
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
						<i className="fas fa-star icon-star"></i>
					</div>
					<div
						className="avatar bg-cover mb-default"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/avatar.jpg)`,
						}}
					></div>
					<div>
						<h4 className="mb-default">John Doe</h4>
						<p>Web developer</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Testimonials;

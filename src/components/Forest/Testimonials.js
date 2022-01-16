import React from 'react';

const Testimonials = ({ image, items }) => {
	return (
		<div
			className="testimonials bg-cover"
			style={{ backgroundImage: image }}
		>
			<div className="container">
				<div className="columns-2">
					{items.map((item, index) => (
						<div className="column">
							<div className="bg-white">
								<p>{item.description}</p>
								<h3>{item.name}</h3>
								<p>
									<em>{item.position}</em>
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default Testimonials;

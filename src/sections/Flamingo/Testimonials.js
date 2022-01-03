import React, { useEffect } from 'react';

const Testimonials = ({ testimonials }) => {
	useEffect(() => {
		import('./testimonials.css');
	});
	return (
		<div className="columns-4 mb-l testimonials-section">
			{testimonials.map((item, index) => (
				<div className="column text-center" key={index}>
					<div className="bg-blue p-m b-white">
						<i className="fas fa-quote-right mb-default icon-green"></i>
						<p className="mb-m">{item.description}</p>
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
								backgroundImage: item.avatar,
							}}
						></div>
						<div>
							<h4 className="mb-default">{item.name}</h4>
							<p>{item.position}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};
export default Testimonials;

import React from 'react';

const Header = ({ image, logo, heading, description, socialMedia }) => {
	return (
		<div
			className="bg-cover header"
			style={{
				backgroundImage: image,
			}}
		>
			<div className="container">
				<div className="logo">
					<img src={logo} />
				</div>
				<h1>{heading}</h1>
				<p>{description}</p>
				<div className="social-media">
					{socialMedia.map((item, index) => (
						<a href={item.link} key={index}>
							<i className={item.icon}></i>
						</a>
					))}
				</div>
			</div>
		</div>
	);
};

export default Header;

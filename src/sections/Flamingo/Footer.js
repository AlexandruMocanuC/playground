import React, { useEffect } from 'react';

import { Link } from 'react-router-dom';

import { base, PUBLIC_URL } from '~/constants/flamingo';

const Footer = () => {
	useEffect(() => {
		import('./footer.css');
	}, []);

	return (
		<div className="footer">
			<div
				className="section text-center bg-cover bg-fixed"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/background-footer.jpg)`,
				}}
			>
				<div className="social-media mb-m">
					<a href="https://facebook.com">
						<i className="fab fa-facebook"></i>
					</a>
					<a href="https://twitter.com">
						<i className="fab fa-twitter"></i>
					</a>
					<a href="https://instagram.com">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://youtube.com">
						<i className="fab fa-youtube"></i>
					</a>
				</div>
				<h2 className="mb-m">Have any project in mind?</h2>
				<a href="#" className="button">
					make inquiry
				</a>
			</div>
			<div className="bg-blue section bb-white">
				<div className="container">
					<div className="menus">
						<div className="menu">
							<div className="logo mb-default">
								<Link to={base}>
									<img
										src={`${PUBLIC_URL}/images/logo.png`}
									/>
								</Link>
							</div>
							<p>We are more than a digital agency</p>
							<div className="separator"></div>
						</div>
						<div className="menu">
							<h5 className="mb-default">Contact Us</h5>
							<div>
								<a href="tel:0727729068" className="mb-default">
									<i className="fas fa-phone-volume icon-white"></i>
									0727729068
								</a>
							</div>
							<div>
								<a
									href="mailto:mocanu.alexandru20@yahoo.ro"
									className="mb-default"
								>
									<i className="far fa-envelope icon-white"></i>
									mocanu.alexandru20@yahoo.ro
								</a>
							</div>
							<div className="mb-default">
								<i className="fas fa-map-marker-alt icon-white"></i>
								Constantza, Romania
							</div>
							<div>
								<i className="far fa-calendar-alt icon-white"></i>
								Monday to Friday
							</div>
						</div>
						<div className="menu">
							<h5 className="mb-default">Our Services</h5>
							<div>
								<a href="#" className="mb-default">
									Link nb.1
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Link nb.2
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Link nb.3
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Link nb.4
								</a>
							</div>
						</div>
						<div className="menu">
							<h5 className="mb-default">About Us</h5>
							<div>
								<a href="#" className="mb-default">
									About
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Blog
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Contact us 1
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									Contact us 2
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-blue py-m">
				<div className="container">
					<div className="copyright mb-default flex">
						<p>Copyright 2020 All rights reserved</p>
						<a href="#">Privacy Policy</a>
						<a href="#">Terms of Use</a>
					</div>
					<div className="flex-between">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit. Ut elit tellus, luctus nec ullamcorper mattis,
							pulvinar dapibus leo.
						</p>
						<div className="social-media-small">
							<a href="https://facebook.com">
								<i className="fab fa-facebook"></i>
							</a>
							<a href="https://twitter.com">
								<i className="fab fa-twitter"></i>
							</a>
							<a href="https://instagram.com">
								<i className="fab fa-instagram"></i>
							</a>
							<a href="https://youtube.com">
								<i className="fab fa-youtube"></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

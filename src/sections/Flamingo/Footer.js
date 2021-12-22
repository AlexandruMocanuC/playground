import React, { useEffect } from 'react';
import { footer } from './db';
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
					backgroundImage: footer.inquiry.image,
				}}
			>
				<div className="social-media mb-m">
					{footer.inquiry.socialMedia.map((item, index) => (
						<a href={item.link} key={index}>
							<i className={item.icon}></i>
						</a>
					))}
				</div>
				<h2 className="mb-m">{footer.inquiry.heading}</h2>
				<a href="#" className="button">
					{footer.inquiry.button.text}
				</a>
			</div>
			<div className="bg-blue section bb-white">
				<div className="container">
					<div className="menus">
						<div className="menu">
							<div className="logo mb-default">
								<Link to={footer.menus.menu1.logo.link}>
									<img src={footer.menus.menu1.logo.image} />
								</Link>
							</div>
							<p>{footer.menus.menu1.description}</p>
							<div className="separator"></div>
						</div>
						<div className="menu">
							<h5 className="mb-default">Contact Us</h5>
							<div>
								<a
									href={
										footer.menus.menu2.buttons.button1.link
									}
									className="mb-default"
								>
									<i
										className={
											footer.menus.menu2.buttons.button1
												.icon
										}
									></i>
									{footer.menus.menu2.buttons.button1.text}
								</a>
							</div>
							<div>
								<a
									href={
										footer.menus.menu2.buttons.button2.link
									}
									className="mb-default"
								>
									<i
										className={
											footer.menus.menu2.buttons.button2
												.icon
										}
									></i>
									{footer.menus.menu2.buttons.button2.text}
								</a>
							</div>
							<div className="mb-default">
								<i
									className={
										footer.menus.menu2.buttons.button3.icon
									}
								></i>
								{footer.menus.menu2.buttons.button3.text}
							</div>
							<div>
								<i
									className={
										footer.menus.menu2.buttons.button4.icon
									}
								></i>
								{footer.menus.menu2.buttons.button4.text}
							</div>
						</div>
						<div className="menu">
							<h5 className="mb-default">
								{footer.menus.menu3.heading}
							</h5>
							<div>
								<a href="#" className="mb-default">
									{footer.menus.menu3.buttons.button1.text}
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									{footer.menus.menu3.buttons.button2.text}
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									{footer.menus.menu3.buttons.button3.text}
								</a>
							</div>
							<div>
								<a href="#" className="mb-default">
									{footer.menus.menu3.buttons.button4.text}
								</a>
							</div>
						</div>
						<div className="menu">
							<h5 className="mb-default">
								{footer.menus.menu4.heading}
							</h5>
							<div>
								<Link
									to={footer.menus.menu4.buttons.button1.link}
									className="mb-default"
								>
									{footer.menus.menu4.buttons.button1.text}
								</Link>
							</div>
							<div>
								<Link
									to={footer.menus.menu4.buttons.button2.link}
									className="mb-default"
								>
									{footer.menus.menu4.buttons.button2.text}
								</Link>
							</div>
							<div>
								<Link
									to={footer.menus.menu4.buttons.button3.link}
									className="mb-default"
								>
									{footer.menus.menu4.buttons.button3.text}
								</Link>
							</div>
							<div>
								<Link
									to={footer.menus.menu4.buttons.button4.link}
									className="mb-default"
								>
									{footer.menus.menu4.buttons.button4.text}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="bg-blue py-m">
				<div className="container">
					<div className="copyright mb-default flex">
						<p>{footer.copyright.text}</p>
						<a href="#">{footer.copyright.buttons.button1.text}</a>
						<a href="#">{footer.copyright.buttons.button2.text}</a>
					</div>
					<div className="flex-between">
						<p>{footer.copyright.description}</p>
						<div className="social-media-small">
							<a
								href={
									footer.copyright.socialMedia.facebook.link
								}
							>
								<i
									className={
										footer.copyright.socialMedia.facebook
											.icon
									}
								></i>
							</a>
							<a href={footer.copyright.socialMedia.twitter.link}>
								<i
									className={
										footer.copyright.socialMedia.twitter
											.icon
									}
								></i>
							</a>
							<a
								href={
									footer.copyright.socialMedia.instagram.link
								}
							>
								<i
									className={
										footer.copyright.socialMedia.instagram
											.icon
									}
								></i>
							</a>
							<a href={footer.copyright.socialMedia.youtube.link}>
								<i
									className={
										footer.copyright.socialMedia.youtube
											.icon
									}
								></i>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;

import React from "react";
import { footer } from "./db";
import { Link } from "react-router-dom";

import { base, PUBLIC_URL } from "~/constants/flamingo";

import $ from "./footer.css";

const Footer = () => (
	<div className={$.footer}>
		<div
			className={$.inquiry}
			style={{
				backgroundImage: footer.inquiry.image,
			}}
		>
			<div className={`${$.social_media} ${$.mb_m}`}>
				{footer.inquiry.socialMedia.map((item, index) => (
					<a href={item.link} key={index}>
						<i className={item.icon}></i>
					</a>
				))}
			</div>
			<div className={`${$.mb_m} ${$.heading}`}>
				{footer.inquiry.heading}
			</div>
			<a href="#" className={$.button}>
				{footer.inquiry.button.text}
			</a>
		</div>
		<div className={`${$.bg_blue} ${$.section} ${$.bb_white}`}>
			<div className={$.container}>
				<div className={$.menus}>
					<div className={$.menu}>
						<div className={`${$.logo} ${$.mb_default}`}>
							<Link to={footer.menus.menu1.logo.link}>
								<img src={footer.menus.menu1.logo.image} />
							</Link>
						</div>
						<p>{footer.menus.menu1.description}</p>
						<div className={$.separator}></div>
					</div>
					<div className={$.menu}>
						<div className={`${$.mb_default} ${$.h5}`}>
							Contact Us
						</div>
						<div>
							<a
								href={footer.menus.menu2.buttons.button1.link}
								className={$.mb_default}
							>
								<i
									className={`
										${footer.menus.menu2.buttons.button1.icon} ${$.icon_white}
									`}
								></i>
								{footer.menus.menu2.buttons.button1.text}
							</a>
						</div>
						<div>
							<a
								href={footer.menus.menu2.buttons.button2.link}
								className={$.mb_default}
							>
								<i
									className={`
										${footer.menus.menu2.buttons.button2.icon} ${$.icon_white}
									`}
								></i>
								{footer.menus.menu2.buttons.button2.text}
							</a>
						</div>
						<div className={$.mb_default}>
							<i
								className={`
										${footer.menus.menu2.buttons.button3.icon} ${$.icon_white}
									`}
							></i>
							{footer.menus.menu2.buttons.button3.text}
						</div>
						<div>
							<i
								className={`
										${footer.menus.menu2.buttons.button4.icon} ${$.icon_white}
									`}
							></i>
							{footer.menus.menu2.buttons.button4.text}
						</div>
					</div>
					<div className={$.menu}>
						<div className={`${$.mb_default} ${$.h5}`}>
							{footer.menus.menu3.heading}
						</div>
						{footer.menus.menu3.buttons.map((button, index) => (
							<div key={index}>
								<a href="#" className={$.mb_default}>
									{button}
								</a>
							</div>
						))}
					</div>
					<div className={$.menu}>
						<div className={`${$.mb_default} ${$.h5}`}>
							{footer.menus.menu4.heading}
						</div>
						{footer.menus.menu4.buttons.map((button, index) => (
							<div key={index}>
								<Link to={button.link} className={$.mb_default}>
									{button.text}
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
		<div className={`${$.bg_blue} ${$.py_m}`}>
			<div className={$.container}>
				<div className={`${$.copyright} ${$.mb_default} ${$.flex}`}>
					<p>{footer.copyright.text}</p>
					<a href="#">{footer.copyright.buttons.button1.text}</a>
					<a href="#">{footer.copyright.buttons.button2.text}</a>
				</div>
				<div className={$.flex_between}>
					<p>{footer.copyright.description}</p>
					<div className={$.social_media_small}>
						{footer.copyright.socialMedia.map((item, index) => (
							<a href={item.link} key={index}>
								<i className={item.icon}></i>
							</a>
						))}
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Footer;

import React from "react";
import Form from "~c/Flamingo/Form";
import { contact } from "./db";

import { PUBLIC_URL } from "~/constants/flamingo";

import $ from "./style.scss";

const Contact = () => (
	<>
		<div
			className={`${$.bg_cover} ${$.header_small}`}
			style={{
				backgroundImage: contact.header.image,
			}}
		>
			<div className={$.h1}>{contact.header.heading}</div>
		</div>
		<div
			className={`${$.bg_blue} ${$.text_center} ${$.section} ${$.contact_section}`}
		>
			<div className={`${$.container} ${$.mb_l}`}>
				<div className={`${$.h2} ${$.mb_default}`}>
					{contact.content.heading}
				</div>
				<div className={$.h5}>{contact.content.description}</div>
			</div>
			<div className={$.container}>
				<div className={$.columns_3}>
					<div className={`${$.column} ${$.text_center} ${$.p_m}`}>
						<i
							className={`fas fa-phone-alt ${$.icon_green} ${$.mb_m}`}
						></i>
						<div className={`${$.h4} ${$.mb_m}`}>
							{contact.content.columns.column1.heading}
						</div>
						<div className={$.mb_default}>
							<a
								href={
									contact.content.columns.column1.buttons
										.button1.link
								}
							>
								{
									contact.content.columns.column1.buttons
										.button1.text
								}
							</a>
						</div>
						<div>
							<a
								href={
									contact.content.columns.column1.buttons
										.button2.link
								}
							>
								{
									contact.content.columns.column1.buttons
										.button2.text
								}
							</a>
						</div>
					</div>
					<div className={`${$.column} ${$.text_center} ${$.p_m}`}>
						<i
							className={`fas fa-map-marker-alt ${$.icon_green} ${$.mb_m}`}
						></i>
						<div className={`${$.h4} ${$.mb_m}`}>
							{contact.content.columns.column2.heading}
						</div>
						<div>
							<p className={$.mb_default}>
								{contact.content.columns.column2.description}
							</p>
						</div>
					</div>
					<div className={`${$.column} ${$.text_center} ${$.p_m}`}>
						<i
							className={`fas fa-envelope-open-text ${$.icon_green} ${$.mb_m}`}
						></i>
						<div className={`${$.h4} ${$.mb_m}`}>
							{contact.content.columns.column3.heading}
						</div>
						<div>
							<a
								href={
									contact.content.columns.column3.buttons
										.button1.link
								}
								className={$.mb_default}
							>
								{
									contact.content.columns.column3.buttons
										.button1.text
								}
							</a>
						</div>
						<div>
							<a
								href={
									contact.content.columns.column3.buttons
										.button2.link
								}
							>
								{
									contact.content.columns.column3.buttons
										.button2.text
								}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className={`${$.bg_grey} ${$.section}`}>
			<div className={`${$.container} ${$.mb_l} ${$.text_center}`}>
				<div className={`${$.h2} ${$.mb_default}`}>
					{contact.form.heading}
				</div>
				<div className={$.h5}>{contact.form.description}</div>
			</div>
			<div className={$.container}>
				<Form />
			</div>
		</div>
	</>
);

export default Contact;

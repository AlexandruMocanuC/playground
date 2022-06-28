import React from "react";
import { team } from "./db";

import { PUBLIC_URL } from "~/constants/flamingo";

import $ from "./team.css";

const Team = () => (
	<div className={$.team}>
		{team.map((member, index) => (
			<div
				className={$.member}
				style={{
					backgroundImage: member.image,
				}}
				key={index}
			>
				<div className={$.member_details}>
					<div className={`${$.mb_default} ${$.h4}`}>
						{member.name}
					</div>
					<p className={$.mb_m}>{member.position}</p>
					<div className={$.social_media_small}>
						{member.socialMedia.map((item, key) => (
							<a href={item.link} key={key}>
								<i className={item.icon}></i>
							</a>
						))}
					</div>
				</div>
			</div>
		))}
	</div>
);

export default Team;

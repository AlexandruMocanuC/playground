import React, { useEffect } from 'react';
import { team } from './db';

import { PUBLIC_URL } from '~/constants/flamingo';

const Team = () => {
	useEffect(() => {
		import('./team.css');
	}, []);
	return (
		<div className="team">
			{team.map((member, index) => (
				<div
					className="bg-cover member"
					style={{
						backgroundImage: member.image,
					}}
					key={index}
				>
					<div className="member-details">
						<h4 className="mb-default">{member.name}</h4>
						<p className="mb-m">{member.position}</p>
						<div className="social-media-small">
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
};
export default Team;

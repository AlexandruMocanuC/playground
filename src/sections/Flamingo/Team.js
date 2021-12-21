import React, { useEffect } from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const Team = () => {
	useEffect(() => {
		import('./team.css');
	}, []);
	return (
		<div className="team">
			<div
				className="bg-cover member"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/about/member1.jpg)`,
				}}
			>
				<div className="member-details">
					<h4 className="mb-default">John Doe</h4>
					<p className="mb-m">Web developer</p>
					<div className="social-media-small">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://intagram.com">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https:linkedin.com">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
			<div
				className="bg-cover member"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/about/member2.jpg)`,
				}}
			>
				<div className="member-details">
					<h4 className="mb-default">John Doe</h4>
					<p className="mb-m">Web developer</p>
					<div className="social-media-small">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://intagram.com">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https:linkedin.com">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
			<div
				className="bg-cover member"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/about/member3.jpg)`,
				}}
			>
				<div className="member-details">
					<h4 className="mb-default">John Doe</h4>
					<p className="mb-m">Web developer</p>
					<div className="social-media-small">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://intagram.com">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https:linkedin.com">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
			<div
				className="bg-cover member"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/about/member4.jpg)`,
				}}
			>
				<div className="member-details">
					<h4 className="mb-default">John Doe</h4>
					<p className="mb-m">Web developer</p>
					<div className="social-media-small">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://intagram.com">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https:linkedin.com">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
			<div
				className="bg-cover member"
				style={{
					backgroundImage: `url(${PUBLIC_URL}/images/about/member5.jpg)`,
				}}
			>
				<div className="member-details">
					<h4 className="mb-default">John Doe</h4>
					<p className="mb-m">Web developer</p>
					<div className="social-media-small">
						<a href="https://facebook.com">
							<i className="fab fa-facebook-f"></i>
						</a>
						<a href="https://intagram.com">
							<i className="fab fa-instagram"></i>
						</a>
						<a href="https:linkedin.com">
							<i className="fab fa-linkedin-in"></i>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Team;

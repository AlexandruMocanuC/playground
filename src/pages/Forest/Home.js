import React from 'react';
import { PUBLIC_URL, base } from '~/constants/forest';
import Info from '~c/Forest/Info';
import Columns3 from '~c/Forest/Columns3';

import { Link } from 'react-router-dom';

const ForestHome = () => (
	<div className="forest">
		<div
			className="bg-cover header"
			style={{
				backgroundImage: `url(${PUBLIC_URL}/header.jpg)`,
			}}
		>
			<div className="container">
				<div className="logo">
					<img src={`${PUBLIC_URL}/logo.png`} />
				</div>
				<h1>Wanderlust</h1>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
					sit amet orci accumsan, tincidunt velit eget, consequat
					ante. Duis in nisi ultrices, eleifend velit sit amet,
					venenatis mi. Sed sed nisi orci. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur
					ridiculus mus.
				</p>
				<div className="social-media">
					<a href="https://facebook.com">
						<i className="fab fa-facebook-f"></i>
					</a>
					<a href="https://instagram.com">
						<i className="fab fa-instagram"></i>
					</a>
					<a href="https://pinterest.com">
						<i className="fab fa-pinterest-p"></i>
					</a>
				</div>
			</div>
		</div>
		<Info
			heading="a unique 1 week adventure"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus. Duis viverra elit et dolor lobortis, et egestas erat vestibulum."
		/>
		<Columns3 />
		<Info
			heading="our satisfied adventurers"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat ex turpis, a commodo arcu consequat ac. Fusce id ante eu elit pulvinar suscipit. Nullam pulvinar ligula porta felis scelerisque accumsan. Aenean in libero rutrum, cursus est a, tincidunt risus."
		/>
	</div>
);

export default ForestHome;

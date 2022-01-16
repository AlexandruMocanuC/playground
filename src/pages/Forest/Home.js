import React from 'react';
import Info from '~c/Forest/Info';
import Columns3 from '~c/Forest/Columns3';
import Columns2 from '~c/Forest/Columns2';
import Testimonials from '~c/Forest/Testimonials';
import Footer from '~c/Forest/Footer';
import { home } from './db';

const ForestHome = () => (
	<div className="forest">
		<div
			className="bg-cover header"
			style={{
				backgroundImage: home.header.image,
			}}
		>
			<div className="container">
				<div className="logo">
					<img src={home.header.logo} />
				</div>
				<h1>{home.header.heading}</h1>
				<p>{home.header.description}</p>
				<div className="social-media">
					{home.header.socialMedia.map((item, index) => (
						<a href={item.link} key={index}>
							<i className={item.icon}></i>
						</a>
					))}
				</div>
			</div>
		</div>
		{home.content.map((section, key) => {
			switch (section.type) {
				case 'info':
					return (
						<Info
							heading={section.heading}
							description={section.description}
						/>
					);
				case 'columns-3':
					return <Columns3 columns={section.columns} />;
				case 'testimonials':
					return (
						<Testimonials
							image={section.image}
							items={section.items}
						/>
					);
				case 'columns-2':
					return (
						<Columns2
							heading={section.heading}
							paragraphs={section.paragraphs}
							image={section.image}
						/>
					);
				default:
					return null;
			}
		})}
		<Footer copyright={home.footer.copyright} />
	</div>
);

export default ForestHome;

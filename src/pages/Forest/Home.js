import React from 'react';
import Header from '~c/Forest/Header';
import Info from '~c/Forest/Info';
import Columns3 from '~c/Forest/Columns3';
import Columns2 from '~c/Forest/Columns2';
import Testimonials from '~c/Forest/Testimonials';
import Footer from '~c/Forest/Footer';
import { home } from './db';

const ForestHome = () => (
	<div className="forest">
		<Header {...home.header} />
		{home.content.map((section, key) => {
			switch (section.type) {
				case 'info':
					return <Info key={key} {...section} />;
				case 'columns-3':
					return <Columns3 key={key} columns={section.columns} />;
				case 'testimonials':
					return <Testimonials key={key} {...section} />;
				case 'columns-2':
					return <Columns2 key={key} {...section} />;
				default:
					return null;
			}
		})}
		<Footer copyright={home.footer.copyright} />
	</div>
);

export default ForestHome;

import React from 'react';

import { PUBLIC_URL } from '~/constants/flamingo';

const News = () => (
	<div className="bg-blue section">
		<div className="container text-center mb-l">
			<h2 className="mb-default">Latest News.</h2>
			<h5>Check Out Some of Our News</h5>
		</div>
		<div className="columns-3">
			<div className="column b-white">
				<div className="w-100">
					<div
						className="pt-100 bg-cover"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/vr.jpg)`,
						}}
					></div>
				</div>
				<div className="p-default">
					<p className="mb-default">
						Could this VR sketching tool be coming of age for
						designers in the future?
					</p>
					<p className="mb-default">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas scelerisque ornare tincidunt....
					</p>
					<a href="#" className="button-small">
						read more
					</a>
				</div>
			</div>
			<div className="column b-white">
				<div className="w-100">
					<div
						className="pt-100 bg-cover"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/design.jpg)`,
						}}
					></div>
				</div>
				<div className="p-default">
					<p className="mb-default">
						8 Cities That Show You What The Future Will Look Like
						(Innovative Ideas)
					</p>
					<p className="mb-default">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas scelerisque ornare tincidunt....
					</p>
					<a href="#" className="button-small">
						read more
					</a>
				</div>
			</div>
			<div className="column b-white">
				<div className="w-100">
					<div
						className="pt-100 bg-cover"
						style={{
							backgroundImage: `url(${PUBLIC_URL}/images/thanks.jpg)`,
						}}
					></div>
				</div>
				<div className="p-default">
					<p className="mb-default">
						15 Gift Ideas for Mom and Dad. Wherever They Are This
						Year
					</p>
					<p className="mb-default">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Maecenas scelerisque ornare tincidunt....
					</p>
					<a href="#" className="button-small">
						read more
					</a>
				</div>
			</div>
		</div>
	</div>
);
export default News;

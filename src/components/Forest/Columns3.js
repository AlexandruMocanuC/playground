import React from 'react';

const Columns3 = ({ columns }) => {
	return (
		<div className="columns-3">
			{columns.map((column, index) => (
				<Column
					image={column.image}
					caption={column.caption}
					key={index}
				/>
			))}
		</div>
	);
};

const Column = ({ image, caption }) => (
	<div className="column">
		<div
			className="bg-cover preview"
			style={{
				backgroundImage: image,
			}}
		></div>
		<div className="caption">
			<p>{caption}</p>
		</div>
	</div>
);

export default Columns3;

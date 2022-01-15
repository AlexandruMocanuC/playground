import React from 'react';

const Columns3 = ({ columns }) => {
	return (
		<div className="columns-3">
			{columns.map((column, index) => (
				<div className="column" key={index}>
					<div
						className="bg-cover preview"
						style={{
							backgroundImage: column.image,
						}}
					></div>
					<div className="caption">
						<p>{column.caption}</p>
					</div>
				</div>
			))}
		</div>
	);
};

export default Columns3;

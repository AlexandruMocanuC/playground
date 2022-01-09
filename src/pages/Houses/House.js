import React from 'react';

const House = ({ house, onClose, onPrev, onNext }) => {
	return (
		<div className="house-modal">
			<div className="content">
				<div
					className="main bg-cover"
					style={{
						backgroundImage: house.image,
					}}
				>
					<div className="text">
						<h1>{house.name}</h1>
						<p>{house.description}</p>
					</div>
					<div className="arrow-prev" onClick={() => onPrev()}>
						<i className="fas fa-chevron-left"></i>
					</div>
					<div className="arrow-next" onClick={() => onNext()}>
						<i className="fas fa-chevron-right"></i>
					</div>
					<div className="close" onClick={() => onClose()}>
						<i className="far fa-times-circle"></i>
					</div>
				</div>
				<div className="sidebar">
					<h2>Rooms</h2>
					{house.rooms.map((room, index) => (
						<div className="room" key={index}>
							<div
								className="bg-cover"
								style={{
									backgroundImage: room.image,
								}}
							>
								<div className="pt-50"></div>
							</div>
							<h3>{room.name}</h3>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};
export default House;

import React, { useState } from "react";

import Room from "./Room";

import $ from "./style.scss";

const House = ({ house, onClose, onPrev, onNext }) => {
	const [roomIndex, setRoomIndex] = useState(null);
	return (
		<>
			<div className={$.house_modal}>
				<div className={$.content}>
					<div
						className={`${$.main} ${$.bg_cover}`}
						style={{
							backgroundImage: house.image,
						}}
					>
						<div className={$.text}>
							<div className={$.h1}>{house.name}</div>
							<div className={$.p}>{house.description}</div>
						</div>
						<div className={$.arrow_prev} onClick={() => onPrev()}>
							<i className="fas fa-chevron-left"></i>
						</div>
						<div className={$.arrow_next} onClick={() => onNext()}>
							<i className="fas fa-chevron-right"></i>
						</div>
						<div className={$.close} onClick={() => onClose()}>
							<i className="far fa-times-circle"></i>
						</div>
					</div>
					<div className={$.sidebar}>
						<div className={$.h2}>Rooms</div>
						<div className={$.rooms}>
							{house.rooms.map((room, index) => (
								<div
									className={$.room}
									key={index}
									onClick={() => setRoomIndex(index)}
								>
									<div
										className={`${$.image} ${$.bg_cover}`}
										style={{
											backgroundImage: room.image,
										}}
									>
										<div className={$.pt_50}></div>
									</div>
									<div className={$.h3}>{room.name}</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
			{roomIndex !== null ? (
				<Room
					image={house.rooms[roomIndex].image}
					description={house.rooms[roomIndex].name}
					onClose={() => setRoomIndex(null)}
					onNext={() =>
						setRoomIndex(
							roomIndex === house.rooms.length - 1
								? 0
								: roomIndex + 1
						)
					}
					onPrev={() =>
						setRoomIndex(
							roomIndex === 0
								? house.rooms.length - 1
								: roomIndex - 1
						)
					}
				/>
			) : null}
		</>
	);
};
export default House;

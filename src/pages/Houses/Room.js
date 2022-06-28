import React from "react";

import $ from "./style.scss";

const Room = ({
	image,
	description = "Lorem ipsum dolor sit amet",
	onClose,
	onPrev,
	onNext,
}) => {
	return (
		<div className={$.rooms_modal}>
			<div className={$.content_room}>
				<div className={$.image} style={{ backgroundImage: image }} />
				<div className={$.arrow_prev} onClick={() => onPrev()}>
					<i className="fas fa-chevron-left"></i>
				</div>
				<div className={$.arrow_next} onClick={() => onNext()}>
					<i className="fas fa-chevron-right"></i>
				</div>
				<div className={$.close} onClick={() => onClose()}>
					<i className="far fa-times-circle"></i>
				</div>
				<div className={$.h2}>{description}</div>
			</div>
		</div>
	);
};

export default Room;

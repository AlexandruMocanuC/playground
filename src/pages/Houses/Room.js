import React from 'react';

import $ from './rooms.scss';

const Room = ({
	image,
	description = 'Lorem ipsum dolor sit amet',
	onClose,
	onPrev,
	onNext,
}) => {
	return (
		<div className={$.rooms_modal}>
			<div className={$.content}>
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
				<h2>{description}</h2>
			</div>
		</div>
	);
};

export default Room;

import React, { useEffect, useState } from "react";
import WebFont from "webfontloader";

import $ from "./style.scss";

const Rating = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Varela+Round"],
			},
		});
	}, []);

	const [selectedRating, selectRating] = useState(null);
	const [isSubmited, setSubmit] = useState(false);
	const [hasError, setError] = useState(false);

	const points = [1, 2, 3, 4, 5];

	return (
		<div className={$.container}>
			<div className={$.rating_box}>
				{!isSubmited ? (
					<>
						<div className={$.icon}>
							<i className="fas fa-star"></i>
						</div>
						<div className={$.title}>How did we do?</div>
						<div className={$.description}>
							Please let us know how we did with your support
							request. All feedback is apreciated to help us
							improve out offering!
						</div>
						<div className={$.rating_points}>
							{points.map((point, index) => (
								<div
									className={`${$.point} ${
										selectedRating === point
											? $.is_active
											: null
									}`}
									key={index}
									onClick={() => {
										setError(false);

										selectedRating === point
											? selectRating(null)
											: selectRating(point);
									}}
								>
									{point}
								</div>
							))}
						</div>
						<div
							className={$.button}
							onClick={() =>
								selectedRating !== null
									? setSubmit(true)
									: setError(true)
							}
						>
							submit
						</div>

						{hasError ? (
							<div className={$.error}>
								You must select a rating first!
							</div>
						) : null}
					</>
				) : (
					<>
						<div className={$.icon}>
							<i className="fas fa-star"></i>
						</div>
						<div className={$.title}>Thanks for your feedback!</div>
						<div className={$.description}>
							We kindly appreciate your feedback!
						</div>

						<div
							className={$.button}
							onClick={() => {
								setSubmit(false);
								selectRating(null);
							}}
						>
							reset
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default Rating;

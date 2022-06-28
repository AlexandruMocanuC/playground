import React, { useState } from "react";
import { home } from "./db";
import House from "./House";

import $ from "./style.scss";

const Home = () => {
	const [houseIndex, setHouseIndex] = useState(null);

	const [isInputVisible, toggleInput] = useState(false);

	const [searchValue, setSearchValue] = useState("");
	const filteredHouses =
		searchValue !== ""
			? home.houses.filter(house =>
					house.details.find(
						detail =>
							detail.name === "rooms" &&
							detail.value === searchValue
					)
			  )
			: home.houses;

	const handleSearchIcon = () => {
		if (isInputVisible === true) {
			setSearchValue("");
		}
		toggleInput(!isInputVisible);
	};

	return (
		<div className={$.houses}>
			<div
				className={`${$.header} ${$.bg_cover}`}
				style={{
					backgroundImage: home.header.image,
				}}
			>
				<div className={$.logo}>
					<img src={home.header.logo} />
				</div>
				<div className={$.search}>
					{isInputVisible === true ? (
						<div className={$.search_input}>
							<input
								className={$.input}
								autoFocus
								onChange={event =>
									setSearchValue(event.target.value)
								}
								type="text"
								placeholder="Search houses by rooms"
							/>
						</div>
					) : null}

					<div
						className={$.search_icon}
						onClick={() => handleSearchIcon()}
					>
						{isInputVisible === true ? (
							<i className="far fa-times-circle"></i>
						) : (
							<i className="fas fa-search"></i>
						)}
					</div>
				</div>
				<div className={$.h1}>{home.header.heading}</div>
			</div>
			{filteredHouses.length !== 0 ? (
				<div className={$.container}>
					<div className={$.columns_2}>
						{filteredHouses.map((house, index) => (
							<div
								className={`${$.column} ${$.house}`}
								key={index}
							>
								<div
									className={$.bg_cover}
									style={{
										backgroundImage: house.image,
									}}
								>
									<div className={$.pt_50}></div>
								</div>
								<div className={$.details}>
									<div className={$.h2}>{house.name}</div>
									<div className={$.p}>
										{house.description}
									</div>
									<div className={$.hover}>
										<span
											className={`${$.button} ${$.span}`}
											onClick={() => setHouseIndex(index)}
										>
											See house
										</span>
										<div>
											{house.details.map((item, key) => (
												<span
													className={$.span}
													key={key}
												>
													{item.name}: {item.value}
													{item.name === "space"
														? "mp"
														: null}
												</span>
											))}
										</div>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			) : (
				<div className={$.no_results}>
					<div className={$.h2}>SORRY,</div>
					<div className={$.h2}>No houses found</div>
					<div className={$.h2}>:(</div>
					<div className={$.p}>
						Seems that no house with that many rooms was found in
						our database!
					</div>
				</div>
			)}
			{houseIndex !== null ? (
				<House
					house={filteredHouses[houseIndex]}
					onClose={() => setHouseIndex(null)}
					onPrev={() =>
						setHouseIndex(
							houseIndex === 0
								? filteredHouses.length - 1
								: houseIndex - 1
						)
					}
					onNext={() =>
						setHouseIndex(
							houseIndex === filteredHouses.length - 1
								? 0
								: houseIndex + 1
						)
					}
				/>
			) : null}
		</div>
	);
};

export default Home;

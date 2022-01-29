import React, { useState } from 'react';
import { home } from './db';
import House from './House';

import $ from './search.scss';

const Home = () => {
	const [houseIndex, setHouseIndex] = useState(null);

	const [isInputVisible, toggleInput] = useState(false);

	const [searchValue, setSearchValue] = useState('');
	const filteredHouses =
		searchValue !== ''
			? home.houses.filter(house =>
					house.details.find(
						detail =>
							detail.name === 'rooms' &&
							detail.value === searchValue
					)
			  )
			: home.houses;

	const handleSearchIcon = () => {
		if (isInputVisible === true) {
			setSearchValue('');
		}
		toggleInput(!isInputVisible);
	};

	return (
		<div className="houses">
			<div
				className="header bg-cover"
				style={{
					backgroundImage: home.header.image,
				}}
			>
				<div className="logo">
					<img src={home.header.logo} />
				</div>
				<div className={$.search}>
					{isInputVisible === true ? (
						<div className={$.search_input}>
							<input
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
				<h1>{home.header.heading}</h1>
			</div>
			{filteredHouses.length !== 0 ? (
				<div className="container">
					<div className="columns-2">
						{filteredHouses.map((house, index) => (
							<div className="column house" key={index}>
								<div
									className="bg-cover"
									style={{
										backgroundImage: house.image,
									}}
								>
									<div className="pt-50"></div>
								</div>
								<div className="details">
									<h2>{house.name}</h2>
									<p>{house.description}</p>
									<div className="hover">
										<span
											className="button"
											onClick={() => setHouseIndex(index)}
										>
											See house
										</span>
										<div>
											{house.details.map((item, key) => (
												<span key={key}>
													{item.name}: {item.value}
													{item.name === 'space'
														? 'mp'
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
					<h2>SORRY,</h2>
					<h2>No houses found</h2>
					<h2>:(</h2>
					<p>
						Seems that no house with that many rooms was found in
						our database!
					</p>
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

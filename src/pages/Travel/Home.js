import React, { useState } from "react";

import { Link } from "react-router-dom";
import { continents } from "./db";

import $ from "./style.scss";

const TravelHome = () => {
	const [continent, setContinent] = useState(0);
	const [country, setCountry] = useState(0);
	const selectCountry = (continentIndex, countryIndex) => {
		setContinent(continentIndex);
		setCountry(countryIndex);
	};
	return (
		<div
			className={$.travel}
			style={{
				backgroundImage: continents[continent].countries[country].image,
			}}
		>
			<div className={$.sidebar}>
				{continents.map((item, index) => (
					<div className={$.continents} key={index}>
						<h1>{item.name}</h1>
						{item.countries.map((c, key) => (
							<div key={key}>
								{index === continent && key === country ? (
									<h2 className={$.country}>
										<span
											style={{
												backgroundImage: c.flag,
											}}
										></span>
										{c.name}
									</h2>
								) : (
									<h3
										className={$.country}
										onClick={() =>
											selectCountry(index, key)
										}
									>
										<span
											style={{
												backgroundImage: c.flag,
											}}
										></span>
										{c.name}
									</h3>
								)}
							</div>
						))}
					</div>
				))}
			</div>
			<div className={$.main}>
				<h2>Top Cities</h2>
				<div className={$.columns_2}>
					{continents[continent].countries[country].cities.map(
						(city, index) => (
							<div
								className={`${$.column} ${$.city}`}
								key={index}
							>
								<h3>{city.name}</h3>
								<div
									className={$.city_image}
									style={{
										backgroundImage: city.image,
									}}
								>
									<div className={$.fill}></div>
								</div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default TravelHome;

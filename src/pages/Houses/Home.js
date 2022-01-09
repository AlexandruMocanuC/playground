import React, { useState } from 'react';
import { home } from './db';
import House from './House';

const Home = () => {
	const [houseIndex, setHouseIndex] = useState(null);

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
				<h1>{home.header.heading}</h1>
			</div>
			<div className="columns-2">
				{home.houses.map((house, index) => (
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
										</span>
									))}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
			{houseIndex !== null ? (
				<House
					house={home.houses[houseIndex]}
					onClose={() => setHouseIndex(null)}
					onPrev={() =>
						setHouseIndex(
							houseIndex === 0
								? home.houses.length - 1
								: houseIndex - 1
						)
					}
					onNext={() =>
						setHouseIndex(
							houseIndex === home.houses.length - 1
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

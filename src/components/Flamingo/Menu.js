import React, { useState } from 'react';
import { menu } from './dbmenu';

const Menu = () => {
	const [currentIndex, setIndex] = useState(0);
	const [openMenu, toggleMenu] = useState(false);
	const handleClick = index => {
		setIndex(index);
		toggleMenu(false);
	};

	return (
		<>
			{openMenu === true ? (
				<div className="menu">
					{menu.map((item, index) => (
						<div key={index} onClick={() => handleClick(index)}>
							{item.name}
						</div>
					))}
				</div>
			) : null}

			<div className="content">
				<div onClick={() => toggleMenu(!openMenu)}>Open menu</div>
				<div className="current-item">
					<h2>{menu[currentIndex].name}</h2>
					<p>{menu[currentIndex].description}</p>
				</div>
			</div>
		</>
	);
};
export default Menu;

import React, { useEffect, useState, useRef } from "react";
import WebFont from "webfontloader";

import $ from "./style.scss";

const Todo = () => {
	useEffect(() => {
		WebFont.load({
			google: {
				families: ["Varela+Round"],
			},
		});
	}, []);

	const initialItems = ["Potato 2 kg", "Flour", "Water x6"];

	const [checkedItems, setCheckedItems] = useState([]);
	const [items, setItems] = useState(initialItems);
	const [isAdd, toggleAdd] = useState(false);

	const inputRef = useRef(null);

	const toggleItem = _item => {
		if (checkedItems.includes(_item)) {
			const index = checkedItems.findIndex(
				checkedItem => checkedItem === _item
			);

			const _checkedItems = [...checkedItems];
			_checkedItems.splice(index, 1);

			setCheckedItems(_checkedItems);
		} else {
			setCheckedItems([...checkedItems, _item]);
		}
	};

	const removeItem = itemToRemove => {
		if (checkedItems.includes(itemToRemove)) {
			const checkedIndex = checkedItems.findIndex(
				checkedItem => checkedItem === itemToRemove
			);
			const _checkedItems = [...checkedItems];
			_checkedItems.splice(checkedIndex, 1);
			setCheckedItems(_checkedItems);
		}

		const index = items.findIndex(item => item === itemToRemove);

		const _items = [...items];
		_items.splice(index, 1);
		setItems(_items);
	};

	const onSave = () => {
		if (inputRef.current.value !== "") {
			setItems([...items, inputRef.current.value]);
			inputRef.current.value = "";
		}
	};

	const handleKeyDown = e => {
		if (e.key === "Enter") {
			onSave();
		}
	};

	return (
		<div className={$.container}>
			<div className={$.card}>
				<div className={$.heading}>Shopping list</div>
				<div className={$.list}>
					{items.map((item, key) => (
						<div className={$.item} key={key}>
							<div
								className={$.check}
								onClick={() => toggleItem(item)}
							>
								{checkedItems.includes(item) ? (
									<i className="fas fa-check"></i>
								) : null}
							</div>
							<div className={$.name}>{item}</div>

							<div
								className={$.trash_bin}
								onClick={() => removeItem(item)}
							>
								<i className="fas fa-trash-alt"></i>
							</div>
						</div>
					))}

					{isAdd ? (
						<div className={$.add_item}>
							<input
								ref={inputRef}
								type="text"
								placeholder="Add item"
								className={$.input}
								onKeyDown={e => handleKeyDown(e)}
							/>
							<div onClick={() => onSave()} className={$.save}>
								<i className="fas fa-check"></i>
							</div>
						</div>
					) : null}
				</div>
				<div className={$.add_action} onClick={() => toggleAdd(!isAdd)}>
					{isAdd ? (
						<i className="fas fa-times"></i>
					) : (
						<i className="fas fa-plus"></i>
					)}
				</div>
			</div>
		</div>
	);
};

export default Todo;

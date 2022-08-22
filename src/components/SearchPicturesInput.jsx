import React from "react";

export default function SearchPicturesInput({
	inputValue,
	onChangedHandler,
	placeholder,
}) {
	return (
		<input
			type="text"
			style={{ width: "100%" }}
			value={inputValue}
			onChange={(e) => onChangedHandler(e.target.value)}
			placeholder={placeholder}
		></input>
	);
}

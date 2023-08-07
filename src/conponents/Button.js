import React from "react";

const Button = ({name}) => {
	return (
		<div>
            <button className="rounded-lg m-2 ml-4 bg-gray-200 py-2 px-3">{name}</button>
		</div>
	);
};

export default Button;

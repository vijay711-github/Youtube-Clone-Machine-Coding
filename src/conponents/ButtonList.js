import React from "react";
import Button from "./Button";

const buttons = [
	{ name: "All" },
	{ name: "BGMI" },
	{ name: "BigBoss" },
	{ name: "Kapil " },
	{ name: "Tarak Mehta" },
	{ name: "PUBG" },
	{ name: "Sony" },
	{ name: "Game" },
	{ name: "TMKOC" },
	{ name: "Ten" },
];
const ButtonList = () => {
	return (
		<div className="flex">
			{buttons.map((button) => {
				return <Button {...button} />;
			})}
		</div>
	);
};

export default ButtonList;

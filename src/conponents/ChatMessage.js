import React from "react";

const ChatMessage = ({name,chat}) => {
	return (
		<div className="flex items-center shadow-sm p-2">
			<img
				className="h-9"
				src="https://cdn3.iconfinder.com/data/icons/avatars-9/145/Avatar_Cat-512.png"
				alt="user"
			/>
			<span className="font-bold px-2 ">{name}</span>
			<span className="">{chat}</span>
		</div>
	);
};

export default ChatMessage;

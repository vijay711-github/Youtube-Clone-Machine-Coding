import React, { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
	const dispatch = useDispatch();
	const ChatMessages = useSelector((store) => store.chat.messages);
	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(
				addmessage({ name: generateRandomName(), chat:randomMessage() })
			);
		}, 500);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse" >
			{ChatMessages.map((message,index) => {
				return <ChatMessage key={index} name={message.name} chat={message.chat} />;
			})}
		</div>
	);
};

export default LiveChat;

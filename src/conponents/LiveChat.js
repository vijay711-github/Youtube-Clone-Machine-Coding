import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addmessage } from "../utils/chatSlice";
import { generateRandomName, randomMessage } from "../utils/helper";

const LiveChat = () => {
	const [liveMessage, setLiveMessage] = useState("");
	const dispatch = useDispatch();
	const ChatMessages = useSelector((store) => store.chat.messages);
	useEffect(() => {
		const interval = setInterval(() => {
			dispatch(
				addmessage({ name: generateRandomName(), chat: randomMessage() })
			);
		}, 500);
		return () => {
			clearInterval(interval);
		};
	}, []);
	return (
		<>
			<div className="w-full h-[500px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll scroll-smooth flex flex-col-reverse">
				<div>
					{ChatMessages.map((message, index) => {
						return (
							<ChatMessage
								key={index}
								name={message.name}
								chat={message.chat}
							/>
						);
					})}
				</div>
			</div>
			<form
				className="w-full ml-2 p-2 border border-black rounded-md "
				onSubmit={(e) => {
					e.preventDefault();
					dispatch(
						addmessage({
							name: "Vijay Jadhav",
							chat: liveMessage,
						})
					);
					setLiveMessage("");
				}}
			>
				<input
					type="text"
					className="w-[70%] px-4 py-2 overflow-y-scroll"
					value={liveMessage}
					onChange={(e) => {
						setLiveMessage(e.target.value);
					}}
				/>
				<button className="px-4 py-2 mx-3 bg-cyan-300 rounded-md font-bold hover:bg-cyan-200 transition-ease">
					Send
				</button>
			</form>
		</>
	);
};

export default LiveChat;

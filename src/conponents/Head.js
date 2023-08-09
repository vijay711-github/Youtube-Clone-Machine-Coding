import React, { useEffect, useState } from "react";
import { togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { Serach_Api } from "../utils/constant";
const Head = () => {
	const [searchQuery, setserachQuery] = useState("");
	const [showSuggestions, setShowSuggestions] = useState(["Iphone","VijayWeb","Frontend","Vijaydev.com"])
	const [suggestion,setsuggestion]=useState(false)
	// useEffect(() => {
	// 	const timer = setTimeout(() => getSearchSuggestions(), 200);
	// 	return () => {
	// 		clearTimeout(timer);
	// 	};
	// }, [searchQuery]);
	// const getSearchSuggestions = async () => {
	// 	const data = await fetch(Serach_Api + searchQuery);
	// 	const json = await data.json();
	// 	console.log(json);
	// setShowSuggestions(json[1])
	// };
	const dispatch = useDispatch();
	const toggleMenu = () => {
		dispatch(togglemenu());
	};
	return (
		<div className="grid grid-flow-col p-2 m-2 shadow-lg">
			<div className="flex col-span-1">
				<img
					onClick={() => toggleMenu()}
					className="h-8 mt-2 cursor-pointer"
					src="https://cdn2.iconfinder.com/data/icons/most-useful-icons-4/50/HAMBURGER_MENU-512.png"
					alt="menu"
				/>
				<img
					className="h-11 mx-5 mt-0"
					src="https://logos-world.net/wp-content/uploads/2020/04/YouTube-Logo-2017-present.jpg"
					alt="YouTube Logo"
				/>
			</div>
			<div className="col-span-10 px-20 relative">
				<div>
					<input
						className="w-1/2 border border-gray-400  px-2 py-1 rounded-l-full"
						type="text"
						placeholder="Search"
						value={searchQuery}
						onChange={(e) => {
							setserachQuery(e.target.value);
						}}
						onFocus={() => setsuggestion(true)}
						onBlur={() => setsuggestion(false)}
					/>
					<button className="border border-gray-400 px-2 py-1 rounded-r-full">
						Search
					</button>
					{suggestion&&<div className="absolute bg-white px-5 py-2 w-[26.5rem] shadow-lg rounded-lg border border-gray-50">
						<ul className="">
							{showSuggestions.map((suggestion) => { return (<li className="hover:bg-gray-300 w-[100%] px-9 py-1">{suggestion}</li>) })}
							
						</ul>
					</div>}
				</div>
			</div>
			<div className="col-span-1">
				<img
					className="h-9"
					src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
					alt="user"
				/>
			</div>
		</div>
	);
};

export default Head;

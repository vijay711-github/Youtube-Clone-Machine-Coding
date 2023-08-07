import React from "react";
import { togglemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
const Head = () => {
    const dispatch=useDispatch()
    const toggleMenu = () => {
        dispatch(togglemenu())
    }
	return (
		<div className="grid grid-flow-col p-2 m-2 shadow-lg">
			<div className="flex col-span-1">
                <img
                    onClick={()=>toggleMenu()}
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
			<div className="col-span-10 px-20 ">
				<input
					className="w-1/2 border border-gray-400 px-2 rounded-l-full"
					type="text"
				/>
				<button className="border border-gray-400 px-2 rounded-r-full">
					Search
				</button>
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

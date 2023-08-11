import React, { useEffect } from "react";
import { closemenu } from "../utils/appSlice";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import CommentsConatainer from "./CommentsConatainer";
import LiveChat from "./LiveChat";

const WatchPage = () => {
	const [searchparams] = useSearchParams();
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(closemenu());
	}, []);
	return (
		<div className="flex flex-col w-full">
			<div className="flex px-5">
				<div>
					<iframe
						width="900"
						height="500"
						src={"https://www.youtube.com/embed/" + searchparams.get("v")}
						title="YouTube video player"
						frameborder="0"
						allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
						allowFullScreen
					></iframe>
				</div>
				<div className="w-full">
					<LiveChat/>
				</div>
			</div>
			<CommentsConatainer />
		</div>
	);
};

export default WatchPage;

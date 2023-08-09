import React from "react";

const VideoCard = ({ info }) => {
	// console.log(info);
	return (
		<div className=" w-72 p-2 m-1 shadow-lg">
			<img
				className="rounded-lg"
				src={info.snippet.thumbnails.high.url}
				alt="thumbnaul"
			/>
			<ul>
				<li className="font-bold py-2">{info.snippet.title}</li>
				<li>{info.snippet.channelTitle}</li>
				<li>{info.statistics.viewCount} Views</li>
			</ul>
		</div>
	);
};

export default VideoCard;

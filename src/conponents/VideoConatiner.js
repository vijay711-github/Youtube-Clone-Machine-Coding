import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constant";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

const VideoConatiner = () => {
  const [videos, setvideos] = useState([]);
  
	useEffect(() => {
		getvideos();
  }, []);
  
	const getvideos = async () => {
		const data = await fetch(YOUTUBE_VIDEO_API);
		const json = await data.json();
		setvideos(json.items);
		// console.log(json);
	};
	return (
    <div className="flex flex-wrap justify-center">
      {videos.map((video) => {
        return <Link to={"/watch?v=" + video.id}> <VideoCard info={video} key={video.id} /></Link>;
      })}
			
		</div>
	);
};

export default VideoConatiner;

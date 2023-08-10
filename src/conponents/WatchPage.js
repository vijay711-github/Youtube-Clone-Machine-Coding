import React, { useEffect } from 'react'
import { closemenu } from '../utils/appSlice'
import { useDispatch } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import CommentsConatainer from './CommentsConatainer'

const WatchPage = () => {
    const [searchparams]=useSearchParams()
    const dispatch=useDispatch()
    useEffect(() => {
        dispatch(closemenu())
    },[])
	return (
	  <div className="flex flex-col">
		<div className="px-5">
			<iframe
				width="900"
				height="500"
				src={"https://www.youtube.com/embed/"+searchparams.get("v")}
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				allowFullScreen
			></iframe>
			</div>
			<CommentsConatainer/>
			</div>
	);
}

export default WatchPage
import React from 'react'

const Comment = ({ data }) => {
  const{name,text,replies}=data
  return (
		<div className='flex shadow-sm bg-slate-300 p-2 rounded-lg my-2'>
			<img
				className="w-8 h-8"
				src="https://pluspng.com/img-png/user-png-icon-big-image-png-2240.png"
				alt="user"
      />
      <div className='px-3'>
        <h2 className="font-bold">{name}</h2>
        <p>{text}</p>
      </div>
		</div>
	);
}

export default Comment
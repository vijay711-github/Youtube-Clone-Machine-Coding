import React from "react";
import Comment from "./Comment";
const CommentsList = ({ comments }) => {
	return (
		<div>
			{comments.map((comment, index) => {
				return (
					<div key={index}>
						<Comment data={comment} />
						<div className="pl-5 border ml-5 border-l-black">
							<CommentsList comments={comment.replies} />
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CommentsList;

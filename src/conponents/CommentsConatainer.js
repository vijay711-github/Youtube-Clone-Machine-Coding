import React from "react";
import Comment from "./Comment";
import CommentsList from "./CommentsList";
const commentsData = [
	{
		name: "Vijay Jahdav",
		text: "Thanks for the video on YouTube",
		replies: [
			{
				name: "Vijay Jahdav",
				text: "Thanks awesome",
				replies: [],
			},
			{
				name: "Vijay Jahdav",
				text: "Thanks for the video on YouTube",
				replies: [],
			},
			{
				name: "Vijay Jahdav",
				text: "Thanks for the video on YouTube",
				replies: [],
			},
			{
				name: "Vijay Jahdav",
				text: "Thanks for the video on YouTube",
				replies: [
					{
						name: "Vijay Jahdav",
						text: "Thanks for the video on YouTube",
						replies: [
							{
								name: "Vijay Jahdav",
								text: "Thanks for the video on YouTube",
								replies: [],
							},
							{
								name: "Vijay Jahdav",
								text: "Thanks for the video on YouTube",
								replies: [],
							},
						],
					},
				],
			},
		],
	},
	{
		name: "Vijay Jahdav",
		text: "Thanks for the video on YouTube",
		replies: [],
	},
	{
		name: "Vijay Jahdav",
		text: "Thanks for the video on YouTube",
		replies: [],
	},
	{
		name: "Vijay Jahdav",
		text: "Thanks for the video on YouTube",
		replies: [],
	},
	{
		name: "Vijay Jahdav",
		text: "Thanks for the video on YouTube",
		replies: [],
	},
];

const CommentsConatainer = () => {
	return (
		<div className="m-2 p-2">
			<h1 className="font-bold text-2xl my-4 ">Comments</h1>
			<Comment data={commentsData[0]} />
			<CommentsList comments={commentsData} />
		</div>
	);
};

export default CommentsConatainer;

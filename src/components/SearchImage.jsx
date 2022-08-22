import React from "react";
import UserInfo from "./UserInfo";

export default function SearchImage({
	imageUrl,
	tags,
	userImageUrl,
	userName,
}) {
	return (
		<div
			className="image-container"
			style={{
				minHeight: "80vh",
				margin: "1rem",
				display: "flex",
				flexWrap: "wrap",
				flexDirection: "row",
				boxShadow: "0 0 10px rgba(0,0,0,0.1)",
				borderRadius: "10px",
				backgroundColor: "rgba(0,0,0,0.01)",
				overflow: "hidden",
				cursor: "pointer",
				position: "relative",
			}}
		>
			<img
				className="image"
				src={imageUrl}
				alt={tags}
				style={{
					width: "100%",
					height: "100%",
					backgroundSize: "cover",
					display: "block",
					borderRadius: "10px",
					objectFit: "cover",
					position: "absolute",
					top: 0,
					left: 0,
				}}
			/>
			<div className="image-hover-background"></div>
			<UserInfo userImageUrl={userImageUrl} userName={userName} />
		</div>
	);
}

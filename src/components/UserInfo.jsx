import React from "react";
import UserImage from "./UserImage";
export default function UserInfo({ userImageUrl, userName }) {
	return (
		<div className="user-info">
			<UserImage userImageUrl={userImageUrl} />
			<span
				className="user-name"
				style={{
					fontSize: 22,
					fontFamily: "cursive",
					fontWeight: 200,
					color: "#fff",
				}}
			>
				{userName}
			</span>
		</div>
	);
}

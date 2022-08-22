import React from "react";

export default function UserImage({ userImageUrl }) {
	return (
		<>
			<img src={userImageUrl} alt="user picutre" className="user-avatar" />
		</>
	);
}

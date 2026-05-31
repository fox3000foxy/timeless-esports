import html2canvas from "html2canvas";
import { memo, useRef } from "react";
import { useParams } from "react-router-dom";
import { teamMembersData } from "../data/teamData";

const InstaPost = memo(() => {
	const { member } = useParams();
	const postRef = useRef<HTMLDivElement>(null);
	const selectedMember = teamMembersData.find(
		(m) => m.nickname.toLowerCase() === member?.toLowerCase()
	);

	const capturePost = async () => {
		if (!postRef.current) return;

		try {
			const canvas = await html2canvas(postRef.current, {
				backgroundColor: null,
				scale: 2, // Higher quality
			});

			// Convert to image and download
			const image = canvas.toDataURL("image/png");
			const link = document.createElement("a");
			link.href = image;
			link.download = `${selectedMember?.nickname || "player"}-post.avif`;
			link.click();
		} catch (error) {
			console.error("Error capturing post:", error);
		}
	};

	if (!selectedMember) {
		return (
			<div className="insta-post-error">
				<h2>Member not found</h2>
				<p>Please check the URL and try again.</p>
			</div>
		);
	}

	return (
		<div ref={postRef} className="insta-post">
			<h2>{selectedMember.nickname}</h2>
			<button onClick={capturePost}>Capture Post</button>
		</div>
	);
});

export default InstaPost;

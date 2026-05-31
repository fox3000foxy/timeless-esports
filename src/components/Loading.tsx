const Loading = () => {
	return (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				minHeight: "100vh",
				background: "#0f0f0f",
				gap: "2rem",
			}}
		>
			<div
				style={{
					width: "48px",
					height: "48px",
					border: "3px solid #1a1a1a",
					borderTopColor: "#dc2626",
					borderRadius: "50%",
					animation: "timeless-spin 0.8s linear infinite",
				}}
			/>
			<span
				style={{
					fontSize: "0.85rem",
					fontWeight: 700,
					textTransform: "uppercase",
					letterSpacing: "3px",
					color: "#a3a3a3",
				}}
			>
				TIMELESS
			</span>
			<style>{`
				@keyframes timeless-spin {
					to { transform: rotate(360deg); }
				}
			`}</style>
		</div>
	);
};

export default Loading;

import { Component, type ReactNode } from "react";

interface ErrorBoundaryProps {
	children: ReactNode;
}

interface ErrorBoundaryState {
	hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
	constructor(props: ErrorBoundaryProps) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(): ErrorBoundaryState {
		return { hasError: true };
	}

	render() {
		if (this.state.hasError) {
			return (
				<div
					style={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						minHeight: "100vh",
						background: "#0f0f0f",
						color: "#fff",
						textAlign: "center",
						padding: "2rem",
					}}
				>
					<h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>
						Une erreur est survenue
					</h1>
					<p style={{ marginBottom: "2rem", color: "#aaa" }}>
						Veuillez rafraîchir la page pour réessayer.
					</p>
					<button
						type="button"
						onClick={() => window.location.reload()}
						style={{
							padding: "0.75rem 2rem",
							background: "#dc2626",
							color: "#fff",
							border: "none",
							borderRadius: "8px",
							fontSize: "1rem",
							cursor: "pointer",
						}}
					>
						Rafraîchir
					</button>
				</div>
			);
		}

		return this.props.children;
	}
}

export default ErrorBoundary;

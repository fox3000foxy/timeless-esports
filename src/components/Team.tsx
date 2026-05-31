import { useState } from "react";
import type { TeamMember } from "../data/teamData";
import { teamMembersData } from "../data/teamData";
import { IconInstagram } from "./Icons";
import "../styles/Team.css";

const Team = () => {
	const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

	const handleMemberClick = (member: TeamMember) => {
		setSelectedMember(member);
	};

	const handleCloseModal = () => {
		setSelectedMember(null);
	};

	return (
		<section id="team" className="team-section">
			<div className="team-background-pattern" />
			<div className="container">
				<h2 className="section-title">Notre Équipe</h2>
				<p className="section-subtitle">
					Découvrez les légendes qui forment l'élite de Timeless
				</p>

				{/* Photo de groupe alignée horizontalement */}
				<div className="team-photo-lineup">
					{teamMembersData.map((member, index) => {
						// Configuration pour chaque membre selon leur position dans l'image
						const configs = [
							{
								scale: 0.75,
								zIndex: 2,
								left: "483px",
								top: "210px",
								height: "576px",
							},
							{
								scale: 0.73,
								zIndex: 3,
								left: "259px",
								top: "191px",
								height: "664px",
							},
							{
								scale: 1,
								zIndex: 5,
								right: "28px",
								top: "175px",
								height: "721px",
							},
							{
								scale: 0.83,
								zIndex: 3,
								right: "203px",
								top: "233px",
								height: "680px",
							},
							{
								scale: 0.75,
								zIndex: 2,
								right: "462px",
								top: "252px",
								height: "646px",
							},
						];

						const config = configs[index];

						return (
							<button
								type="button"
								key={member.nickname}
								className="team-member-photo"
								onClick={() => handleMemberClick(member)}
							>
								<img
									src={member.avatar}
									alt={`${member.name} - ${member.role}`}
									className="member-image"
									style={{
										height: config.height,
										transform: `scale(${config.scale})`,
										zIndex: config.zIndex,
										position: "relative",
										left: config.left,
										right: config.right,
										top: config.top,
									}}
									onMouseOver={(e) => {
										const scale = config.scale * 1.05;
										e.currentTarget.style.transform = `scale(${scale})`;
									}}
									onMouseOut={(e) => {
										e.currentTarget.style.transform = `scale(${config.scale})`;
									}}
									onFocus={(e) => {
										const scale = config.scale * 1.05;
										e.currentTarget.style.transform = `scale(${scale})`;
									}}
									onBlur={(e) => {
										e.currentTarget.style.transform = `scale(${config.scale})`;
									}}
								/>
							</button>
						);
					})}
				</div>

				{selectedMember && (
					<div
						className="modal-overlay"
						role="dialog"
						aria-modal="true"
						onClick={handleCloseModal}
						onKeyDown={(e) => {
							if (e.key === "Escape") {
								handleCloseModal();
							}
						}}
					>
						<div
							className="modal-content"
							role="document"
							onClick={(e) => e.stopPropagation()}
							onKeyDown={(e) => e.stopPropagation()}
							style={{
								background: "rgba(10, 10, 10, 0.98)",
								padding: "2rem",
								borderRadius: "12px",
								color: "#fff",
								width: "95%",
								maxWidth: "1200px",
								maxHeight: "85vh",
								overflow: "auto",
								border: "1px solid rgba(220, 38, 38, 0.3)",
								boxShadow: "0 0 30px rgba(220, 38, 38, 0.2)",
								marginTop: "60px",
							}}
						>
							<button
								type="button"
								onClick={handleCloseModal}
								style={{
									position: "absolute",
									right: "1rem",
									top: "1rem",
									background: "rgba(255, 43, 43, 0.1)",
									border: "1px solid rgba(255, 43, 43, 0.3)",
									borderRadius: "50%",
									width: "32px",
									height: "32px",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									color: "#ff2b2b",
									fontSize: "1.2rem",
									cursor: "pointer",
									transition: "all 0.2s ease",
								}}
								onMouseOver={(e) => {
									e.currentTarget.style.background = "rgba(255, 43, 43, 0.2)";
									e.currentTarget.style.transform = "scale(1.1)";
								}}
								onMouseOut={(e) => {
									e.currentTarget.style.background = "rgba(255, 43, 43, 0.1)";
									e.currentTarget.style.transform = "scale(1)";
								}}
								onFocus={(e) => {
									e.currentTarget.style.background = "rgba(255, 43, 43, 0.2)";
									e.currentTarget.style.transform = "scale(1.1)";
								}}
								onBlur={(e) => {
									e.currentTarget.style.background = "rgba(255, 43, 43, 0.1)";
									e.currentTarget.style.transform = "scale(1)";
								}}
							>
								✕
							</button>
							<div
								style={{
									display: "flex",
									flexDirection: "row",
									gap: "2rem",
								}}
							>
								<div
									style={{
										flex: "0 0 280px",
										display: "flex",
										justifyContent: "center",
										alignItems: "flex-start",
										position: "sticky",
										top: 0,
										alignSelf: "flex-start",
									}}
									className="modal-member-avatar"
								>
									<img
										src={selectedMember.avatar}
										alt={`${selectedMember.name} - ${selectedMember.role}`}
										style={{
											width: "100%",
											height: "auto",
											borderRadius: "12px",
											objectFit: "cover",
										}}
									/>
								</div>
								<div style={{ flex: "1", minWidth: 0 }}>
									<div className="info-header">
										<h3>{selectedMember.nickname}</h3>
										<p className="member-name">
											<span>{selectedMember.name}</span>
											<a
												href={selectedMember.instagram}
												target="_blank"
												rel="noopener noreferrer"
												className="instagram-link"
												aria-label="Instagram"
											>
												<IconInstagram size={18} />
											</a>
										</p>
										<p className="role">{selectedMember.role}</p>
										<p className="game">{selectedMember.game}</p>
									</div>
									<div className="info-content">
										<p className="bio">{selectedMember.bio}</p>
										{selectedMember.fullStory && (
											<div className="full-story">
												<h4>Histoire</h4>
												<p>{selectedMember.fullStory}</p>
											</div>
										)}
										{selectedMember.playstyle && (
											<div className="playstyle">
												<h4>Style de Jeu</h4>
												<p>{selectedMember.playstyle}</p>
											</div>
										)}
										<div className="stats">
											<h4>Stats</h4>
											<ul className="stats-list">
												<li>
													<strong>K/D:</strong> {selectedMember.stats.kd}
												</li>
												<li>
													<strong>KAST:</strong> {selectedMember.stats.kast}
												</li>
												<li>
													<strong>Clutch Rate:</strong>{" "}
													{selectedMember.stats.clutchRate}
												</li>
												<li>
													<strong>Win Rate:</strong>{" "}
													{selectedMember.stats.winRate}
												</li>
												<li>
													<strong>First Bloods:</strong>{" "}
													{selectedMember.stats.firstBloods}
												</li>
											</ul>
										</div>
										<div className="achievements">
											<h4>Achievements</h4>
											{selectedMember.achievements.map(
												(achievement: string) => (
													<span key={achievement} className="achievement-badge">
														🏆 {achievement}
													</span>
												)
											)}
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</section>
	);
};

export default Team;

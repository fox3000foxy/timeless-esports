import { memo } from "react";
import { IconGamepad, IconMedal, IconTrophy } from "./Icons";

const Tournaments = memo(() => {
	const achievements = [
		{
			title: "Vainqueur Tournoi Local Paris",
			game: "Valorant",
			icon: IconTrophy,
		},
		{
			title: "Finaliste Tournoi Régional Lyon",
			game: "Valorant",
			icon: IconMedal,
		},
		{
			title: "Top 4 Tournoi Amateur Marseille",
			game: "Valorant",
			icon: IconGamepad,
		},
	];

	return (
		<section id="tournaments" className="tournaments-section">
			<div className="container">
				<h2 className="section-title">Nos Succès</h2>
				<div className="achievements-grid">
					{achievements.map((achievement) => {
						const Icon = achievement.icon;
						return (
							<div key={achievement.title} className="achievement-card">
								<div className="achievement-icon">
									<Icon size={48} />
								</div>
								<h3>{achievement.title}</h3>
								<p>{achievement.game}</p>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
});

export default Tournaments;

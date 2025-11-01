import {
  faGamepad,
  faMedal,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Tournaments = () => {
  const achievements = [
    {
      title: "Vainqueur Tournoi Local Paris",
      game: "Valorant",
      icon: faTrophy,
    },
    {
      title: "Finaliste Tournoi Régional Lyon",
      game: "Valorant",
      icon: faMedal,
    },
    {
      title: "Top 4 Tournoi Amateur Marseille",
      game: "Valorant",
      icon: faGamepad,
    },
  ];

  return (
    <section id="tournaments" className="tournaments-section">
      <div className="container">
        <h2 className="section-title">Nos Succès</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div key={index} className="achievement-card">
              <div className="achievement-icon">
                <FontAwesomeIcon icon={achievement.icon} />
              </div>
              <h3>{achievement.title}</h3>
              <p>{achievement.game}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tournaments;

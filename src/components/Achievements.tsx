// import './Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      title: 'Champions League Summer 2025',
      game: 'League of Legends',
      position: '1er',
      prize: '100,000€',
      date: 'Août 2025',
      icon: '🏆'
    },
    {
      title: 'World Championship',
      game: 'Valorant',
      position: 'Top 4',
      prize: '250,000€',
      date: 'Octobre 2025',
      icon: '🥉'
    },
    // Ajoutez d'autres réalisations ici
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <h2 className="section-title">Nos Réalisations</h2>
        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="achievement-card"
             
              data-aos-delay={index * 100}
            >
              <div className="achievement-icon">{achievement.icon}</div>
              <h3>{achievement.title}</h3>
              <div className="achievement-details">
                <span className="game">{achievement.game}</span>
                <span className="position">{achievement.position}</span>
                <span className="prize">{achievement.prize}</span>
                <span className="date">{achievement.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
import { useEffect, useState } from 'react';
import '../styles/GamesList.css';

const GamesList = () => {
  const games = [
    // {
    //   name: 'League of Legends',
    //   image: '/assets/games/lol.avif',
    //   division: 'LFL Division 1',
    //   rank: '#2',
    //   nextMatch: '15 Nov. 2027',
    //   roster: ['Emi', 'Rami', 'Lin', 'Emma', 'Marvin']
    // },
    {
      name: 'Valorant',
      image: '/assets/games/valorant.avif',
      division: 'VCT EMEA',
      rank: '#4',
      nextMatch: '18 Nov. 2027',
      roster: ['Emi', 'Rami', 'Lin', 'Emma', 'Marvin']
    }
    // Ajoutez d'autres jeux
  ];

  const [activeGame, setActiveGame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveGame((prev) => (prev + 1) % games.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [games.length]);

  return (
    <section className="games-section" id="games">
      <div className="container">
        <h2 className="section-title">Nos Jeux</h2>
        <div className="games-showcase">
          <div className="games-nav">
            {games.map((game, index) => (
              <button
                key={index}
                className={`game-nav-item ${activeGame === index ? 'active' : ''}`}
                onClick={() => setActiveGame(index)}
              >
                {game.name}
              </button>
            ))}
          </div>
          <div className="game-details">
            <div 
              className="game-banner" 
              style={{ backgroundImage: `url(${games[activeGame].image})` }}
            >
              <div className="game-info-overlay">
                <h3>{games[activeGame].name}</h3>
                <div className="game-stats">
                  <div className="stat">
                    <span className="label">Division</span>
                    <span className="value">{games[activeGame].division}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Classement</span>
                    <span className="value">{games[activeGame].rank}</span>
                  </div>
                  <div className="stat">
                    <span className="label">Prochain Match</span>
                    <span className="value">{games[activeGame].nextMatch}</span>
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="game-roster">
              <h4>Roster Actuel</h4>
              <div className="roster-list">
                {games[activeGame].roster.map((player, index) => (
                  <div key={index} className="roster-player">
                    <img 
                      src={`/assets/players/${player.toLowerCase()}.avif`} 
                      alt={player} 
                      className="player-avatar"
                    />
                    <span>{player}</span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GamesList;
import { useParams } from 'react-router-dom';
import { teamMembersData } from '../data/teamData';
// import './PlayerProfile.css';

const PlayerProfile = () => {
  const { playerId } = useParams();
  const player = teamMembersData.find(p => p.nickname.toLowerCase() === playerId?.toLowerCase());

  if (!player) {
    return (
      <div className="player-not-found">
        <h2>Joueur non trouvé</h2>
      </div>
    );
  }

  const achievements = [
    {
      title: 'Champion LFL Summer 2025',
      date: 'Août 2025',
      game: 'League of Legends',
      prize: '50,000€'
    },
    // Ajouter plus de réalisations
  ];

  const stats = {
    winRate: '68%',
    matchesPlayed: 145,
    avgKDA: '4.2',
    tournaments: 12
  };

  return (
    <section className="player-profile-section">
      <div className="container">
        <div className="profile-header">
          <div className="profile-image-container">
            <img 
              src={`/assets/players/${player.nickname.toLowerCase()}.avif`} 
              alt={player.nickname} 
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            <h1>{player.nickname}</h1>
            {/* <h2>{player.fullName}</h2> */}
            <div className="player-details">
              <span className="role">{player.role}</span>
              {/* <span className="nationality">{player.nationality}</span> */}
              <span className="joined">Membre depuis 2024</span>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-stats">
            <h3>Statistiques</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-value">{stats.winRate}</span>
                <span className="stat-label">Win Rate</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.matchesPlayed}</span>
                <span className="stat-label">Matches Joués</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.avgKDA}</span>
                <span className="stat-label">KDA Moyen</span>
              </div>
              <div className="stat-item">
                <span className="stat-value">{stats.tournaments}</span>
                <span className="stat-label">Tournois</span>
              </div>
            </div>
          </div>

          <div className="profile-achievements">
            <h3>Réalisations</h3>
            <div className="achievements-list">
              {achievements.map((achievement, index) => (
                <div key={index} className="achievement-item">
                  <div className="achievement-header">
                    <h4>{achievement.title}</h4>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                  <div className="achievement-details">
                    <span className="game">{achievement.game}</span>
                    <span className="prize">{achievement.prize}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="profile-highlights">
            <h3>Highlights</h3>
            <div className="highlights-grid">
              {/* Ajoutez ici une grille de clips ou moments forts */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlayerProfile;
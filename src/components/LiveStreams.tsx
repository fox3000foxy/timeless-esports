interface Stream {
  id: number;
  title: string;
  platform: 'twitch' | 'youtube';
  channelName: string;
  status: 'live' | 'offline';
  viewers?: number;
  game: string;
  scheduleTime?: string;
}

const LiveStreams = () => {
  const streams: Stream[] = [
    {
      id: 1,
      title: "Valorant Ranked Grind",
      platform: 'twitch',
      channelName: 'TimelessValorant',
      status: 'live',
      viewers: 2400,
      game: 'Valorant',
      scheduleTime: 'En direct'
    },
    {
      id: 2,
      title: "League of Legends Pro Scrim",
      platform: 'twitch',
      channelName: 'TimelessLOL',
      status: 'offline',
      game: 'League of Legends',
      scheduleTime: 'Aujourd\'hui à 18:00'
    },
    {
      id: 3,
      title: "CS2 Tournament Day 1",
      platform: 'youtube',
      channelName: 'Timeless Esports',
      status: 'live',
      viewers: 5600,
      game: 'Counter-Strike 2',
      scheduleTime: 'En direct'
    },
    {
      id: 4,
      title: "Rocket League Championship",
      platform: 'twitch',
      channelName: 'TimelessRL',
      status: 'offline',
      game: 'Rocket League',
      scheduleTime: 'Vendredi à 20:00'
    },
    {
      id: 5,
      title: "Community Hangout & Q&A",
      platform: 'youtube',
      channelName: 'Timeless Esports',
      status: 'offline',
      game: 'IRL',
      scheduleTime: 'Dimanche à 19:00'
    },
    {
      id: 6,
      title: "Pro Player Training Session",
      platform: 'twitch',
      channelName: 'TimelessCoaching',
      status: 'offline',
      game: 'Multiple',
      scheduleTime: 'Mercredi à 16:00'
    }
  ];

  const getPlatformColor = (platform: 'twitch' | 'youtube') => {
    return platform === 'twitch' ? '#9146FF' : '#FF0000';
  };

  const getPlatformIcon = (platform: 'twitch' | 'youtube') => {
    return platform === 'twitch' ? '📺' : '▶️';
  };

  return (
    <section id="live-streams" className="live-streams-section">
      <div className="container">
        <h2 className="section-title">Streams en Direct</h2>
        <p className="section-subtitle">Regardez nos joueurs professionnels en action</p>
        
        <div className="streams-info">
          <p>Retrouvez nos contenus en direct sur Twitch et YouTube. Suivez nos chaînes pour les notifications de streaming.</p>
        </div>

        <div className="streams-grid">
          {streams.map((stream) => (
            <div key={stream.id} className="stream-card">
              <div className="stream-header" style={{ borderLeft: `4px solid ${getPlatformColor(stream.platform)}` }}>
                <div className="stream-platform">
                  <span>{getPlatformIcon(stream.platform)}</span>
                  <span style={{ color: getPlatformColor(stream.platform), fontWeight: 'bold' }}>
                    {stream.platform.toUpperCase()}
                  </span>
                </div>
                {stream.status === 'live' && (
                  <div className="stream-live-badge">
                    <span className="live-dot"></span>
                    EN DIRECT
                  </div>
                )}
              </div>

              <div className="stream-content">
                <h3>{stream.title}</h3>
                <p className="stream-channel">@{stream.channelName}</p>
                <p className="stream-game">🎮 {stream.game}</p>
              </div>

              <div className="stream-footer">
                <div className="stream-details">
                  {stream.viewers && (
                    <span className="viewers">👥 {stream.viewers.toLocaleString()} viewers</span>
                  )}
                  {stream.scheduleTime && (
                    <span className="schedule">🕐 {stream.scheduleTime}</span>
                  )}
                </div>
                <a 
                  href={
                    stream.platform === 'twitch' 
                      ? `https://twitch.tv/${stream.channelName}` 
                      : `https://youtube.com/@${stream.channelName}`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-button"
                  style={{
                    backgroundColor: getPlatformColor(stream.platform),
                    textDecoration: 'none',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: '4px',
                    display: 'inline-block',
                    marginTop: '1rem',
                    fontWeight: 'bold',
                    transition: 'opacity 0.3s'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = '0.8'}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
                >
                  Regarder
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="streams-cta">
          <h3>Vous voulez être notifié des nouveaux streams?</h3>
          <p>Abonnez-vous à nos chaînes pour recevoir les notifications en temps réel</p>
          <div className="cta-buttons">
            <a href="https://twitch.tv/timelessesports" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ backgroundColor: '#9146FF' }}>
              Suivre sur Twitch
            </a>
            <a href="https://youtube.com/@timelessesports" target="_blank" rel="noopener noreferrer" className="cta-button" style={{ backgroundColor: '#FF0000' }}>
              S'abonner sur YouTube
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LiveStreams;

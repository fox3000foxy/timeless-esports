import { useEffect, useState } from 'react';
import './Schedule.css';

const Schedule = () => {
    const [upcomingMatches] = useState([
        {
            opponent: 'Team Vitality',
            game: 'League of Legends',
            date: '2027-11-15T20:00:00',
            tournament: 'LFL 2025',
            streamUrl: 'https://twitch.tv/otplol_',
            logoUrl: '/assets/teams/vitality.avif'
        },
        {
            opponent: 'Karmine Corp',
            game: 'Valorant',
            date: '2027-11-18T21:00:00',
            tournament: 'VCT France',
            streamUrl: 'https://twitch.tv/valorant_fr',
            logoUrl: '/assets/teams/kcorp.avif'
        }
        // Ajoutez d'autres matchs
    ]);

    useEffect(() => {
        // Ici vous pourriez charger les vrais matchs depuis une API
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        return new Intl.DateTimeFormat('fr-FR', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            hour: 'numeric',
            minute: 'numeric'
        }).format(date);
    };

    return (
        <section className="schedule-section" id="schedule">
            <div className="container">
                <h2 className="section-title">Matchs à Venir</h2>
                <div className="schedule-grid">
                    {upcomingMatches.map((match, index) => (
                        <div
                            key={index}
                            className="match-card"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="match-header">
                                <span className="game-tag">{match.game}</span>
                                <span className="tournament">{match.tournament}</span>
                            </div>
                            <div className="match-teams">
                                <div className="team">
                                    <img src="/assets/logo.avif" alt="Timeless" className="team-logo" />
                                    <span>Timeless</span>
                                </div>
                                <span className="vs">VS</span>
                                <div className="team">
                                    <img src={match.logoUrl} alt={match.opponent} className="team-logo" />
                                    <span>{match.opponent}</span>
                                </div>
                            </div>
                            <div className="match-info">
                                <div className="date">{formatDate(match.date)}</div>
                                <a href={match.streamUrl} target="_blank" rel="noopener noreferrer" className="watch-button">
                                    Regarder le Stream
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Schedule;
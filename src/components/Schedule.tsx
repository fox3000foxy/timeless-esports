import { useEffect, useState } from "react";
import "../styles/Schedule.css";

const Schedule = () => {
  const [upcomingMatches] = useState([
    {
      opponent: "Karmine Corp",
      game: "Valorant",
      date: "2027-11-18T21:00:00",
      tournament: "VCT EMEA",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/kcorp.avif",
    },
    {
      opponent: "Team Vitality",
      game: "Valorant",
      date: "2027-11-25T19:30:00",
      tournament: "Challengers France",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/vitality.avif",
    },
    {
      opponent: "M8",
      game: "Valorant",
      date: "2027-11-30T18:00:00",
      tournament: "Game Changers EMEA",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/m8.avif",
    },
    {
      opponent: "Solary",
      game: "Valorant",
      date: "2027-12-02T20:15:00",
      tournament: "VRL France",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/solary.avif",
    },
    {
      opponent: "Aegis",
      game: "Valorant",
      date: "2027-12-05T17:45:00",
      tournament: "Tournoi Local Paris",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/aegis.avif",
    },
    {
      opponent: "Team GO",
      game: "Valorant",
      date: "2027-12-08T19:00:00",
      tournament: "Championnat de France",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/teamgo.avif",
    },
    {
      opponent: "Mandatory",
      game: "Valorant",
      date: "2027-12-12T21:30:00",
      tournament: "Qualificatifs Masters",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/mandatory.avif",
    },
    {
      opponent: "Team BDS",
      game: "Valorant",
      date: "2027-12-15T20:00:00",
      tournament: "VCT Ascension EMEA",
      streamUrl: "https://twitch.tv/valorant_fr",
      logoUrl: "/assets/teams/bds.avif",
    },
  ]);

  useEffect(() => {
    // Ici vous pourriez charger les vrais matchs depuis une API
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "numeric",
      minute: "numeric",
    }).format(date);
  };

  return (
    <section className="schedule-section" id="schedule">
      <div className="container">
        <h2 className="section-title">Matchs à Venir</h2>
        <div
          className="schedule-grid"
          style={{
            display: "grid",
            gap: "20px",
          }}
        >
          {upcomingMatches.map((match, index) => (
            <div
              key={index}
              className="match-card"
              data-aos-delay={index * 100}
            >
              <div className="match-header">
                <span className="game-tag">{match.game}</span>
                <span className="tournament">{match.tournament}</span>
              </div>
              <div className="match-teams">
                <div className="team">
                  <img
                    src="/assets/logo-no-text.avif"
                    alt="Timeless"
                    className="team-logo"
                  />
                  <span>Timeless</span>
                </div>
                <span className="vs">VS</span>
                <div className="team">
                  <img
                    src={match.logoUrl}
                    alt={match.opponent}
                    className="team-logo"
                  />
                  <span>{match.opponent}</span>
                </div>
              </div>
              <div className="match-info">
                <div className="date">{formatDate(match.date)}</div>
                <a
                  href={match.streamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="watch-button"
                >
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

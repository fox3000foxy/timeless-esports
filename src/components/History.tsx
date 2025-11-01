import '../styles/History.css';

const History = () => {
  const historyEvents = [
    { date: '12/08/2025', description: 'Idée & premières sessions' },
    { date: '15/08/2025', description: "Création officielle de l'équipe" },
    { date: '31/10/2025', description: 'Premiers entraînements publics' },
  ];

  const members = [
    {
      name: 'Rami "Panther" Vemuri',
      role: 'Bras droit - Phoenix',
      description: 'Instinct, charisme et audace.',
    },
    {
      name: 'Emma "Emster" Roussel',
      role: 'Support & Stratège - Astra',
      description: "De l'art à la stratégie : précision et résilience.",
    },
    {
      name: 'Lin "Colomb" Yun-Ji',
      role: 'Sentinel - Killjoy',
      description: 'Rigueur coréenne, lecture du jeu.',
    },
    {
      name: 'Marvin "Phantom" Fournier',
      role: 'Initiator - Sova',
      description: 'Analyse, anticipation, sang-froid.',
    },
  ];

  return (
    <section id="history" className="history-section">
      <div className="container">
        <h2 className="section-title">Notre Histoire</h2>
        <p className="section-subtitle">
          Une équipe née d'un rêve commun : prouver que la persévérance, la solidarité et le talent n'ont pas d'origine.
        </p>

        <div className="history-grid">
          <div className="history-main">
            <h3 className="history-title">Une passion devenue famille</h3>
            <p className="history-description">
              <strong>Timeless Esports</strong> est née d'un rêve partagé : prouver que la passion et la persévérance peuvent traverser les frontières.
              À l'origine du projet, <strong>Emi Tanaka</strong>, une jeune franco-japonaise installée en Normandie, décide de créer une équipe à son image : humaine, ambitieuse et unie.
            </p>

            <div className="history-members">
              {members.map((member, index) => (
                <div key={index} className="member-card">
                  <h4 className="member-name">{member.name}</h4>
                  <p className="member-role">{member.role}</p>
                  <p className="member-description">{member.description}</p>
                </div>
              ))}
            </div>

            <h3 className="history-title">Une équipe née de la volonté</h3>
            <p className="history-description">
              Fondée en <strong>août 2025</strong>, <strong>Timeless</strong> s'est construite sur la conviction que le talent ne se limite ni à une origine, ni à un parcours. Chacun de ses membres a dû surmonter ses propres épreuves - solitude, précarité, perte ou doute - et a transformé ces obstacles en force collective.
            </p>

            <blockquote className="history-quote">
              « Le temps passe, mais la passion, elle, ne s'efface jamais. »
            </blockquote>

            <h3 className="history-title">Plus qu'une équipe, une vision</h3>
            <p className="history-description">
              Au-delà du jeu, Timeless défend des valeurs fortes - <strong>justice</strong>, <strong>passion</strong> et <strong>persévérance</strong> - et aspire à inspirer une communauté authentique, soudée et ambitieuse.
            </p>
          </div>

          <div className="history-aside">
            <h3 className="aside-title">Dates clés</h3>
            <div className="history-timeline">
              {historyEvents.map((event, index) => (
                <div key={index} className="timeline-event">
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
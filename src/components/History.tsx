import { faBalanceScale, faFire, faHandshake } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface PersonCardProps {
  name: string;
  role: string;
  brief: string;
}

interface CardProps {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

function PersonCard({ name, role, brief }: PersonCardProps) {
  return (
    <article className="member-card">
      <h4 className="member-name">{name}</h4>
      <p className="member-role">{role}</p>
      <p className="member-brief">{brief}</p>
    </article>
  );
}

function Card({ title, subtitle, children }: CardProps) {
  return (
    <div className="history-card">
      <h5 className="card-title">{title}</h5>
      {subtitle && <p className="card-subtitle">{subtitle}</p>}
      <div className="card-content">{children}</div>
    </div>
  );
}

interface HistoryEvent {
  date: string;
  description: string;
}

const historyEvents: HistoryEvent[] = [
  { date: '12/08/2025', description: 'Idée & premières sessions' },
  { date: '15/08/2025', description: "Création officielle de l'équipe" },
  { date: '31/10/2025', description: 'Premiers entraînements publics' },
];

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState<HistoryEvent | null>(null);

  const handleEventClick = (event: HistoryEvent) => {
    setSelectedEvent(event);
  };

  const handleCloseModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section className="history-section" id="history">
      <header className="history-header">
        <p className="header-tag">
          <FontAwesomeIcon icon={faBalanceScale} className="icon" /> Notre Histoire
        </p>
        <h1 className="history-title">
          Timeless Esports -
          <span>
            {" "}une passion devenue famille
          </span>
        </h1>
        <p className="history-subtitle">
          Une équipe née d'un rêve commun : prouver que la persévérance, la solidarité et le talent n'ont pas d'origine.
        </p>
      </header>

      <div className="history-grid">
        <article className="history-main-article">
          <h2 className="history-article-title">Une passion devenue famille</h2>
          <p className="history-article-text">
            <strong>Timeless Esports</strong> est née d'un rêve partagé : prouver que la passion et la persévérance peuvent traverser les frontières.
            À l'origine du projet, <strong>Emi Tanaka</strong>, une jeune franco-japonaise installée en Normandie, décide de créer une équipe à son image : humaine, ambitieuse et unie.
          </p>

          <div className="member-grid">
            <PersonCard 
              name={'Rami "Panther" Vemuri'}
              role="Bras droit - Phoenix" 
              brief="Instinct, charisme et audace." 
            />
            <PersonCard 
              name={'Emma "Emster" Roussel'}
              role="Support & Stratège - Astra" 
              brief="De l'art à la stratégie : précision et résilience." 
            />
            <PersonCard 
              name={'Lin "Colomb" Yun-Ji'}
              role="Sentinel - Killjoy" 
              brief="Rigueur coréenne, lecture du jeu." 
            />
            <PersonCard 
              name={'Marvin "Phantom" Fournier'}
              role="Initiator - Sova" 
              brief="Analyse, anticipation, sang-froid." 
            />
          </div>

          <h3 className="mt-8 text-lg font-medium">Une équipe née de la volonté</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Fondée en <strong>août 2025</strong>, <strong>Timeless</strong> s'est construite sur la conviction que le talent ne se limite ni à une origine, ni à un parcours. Chacun de ses membres a dû surmonter ses propres épreuves - solitude, précarité, perte ou doute - et a transformé ces obstacles en force collective.
          </p>

          <blockquote className="history-quote">
            « Le temps passe, mais la passion, elle, ne s'efface jamais. »
          </blockquote>

          <h3 className="mt-8 text-lg font-medium">Plus qu'une équipe, une vision</h3>
          <p className="mt-3 text-slate-600 leading-relaxed">
            Au-delà du jeu, Timeless défend des valeurs fortes - <strong>justice</strong>, <strong>passion</strong> et <strong>persévérance</strong> - et aspire à inspirer une communauté authentique, soudée et ambitieuse.
          </p>
        </article>

        <aside className="space-y-6">
          <Card title="Nos valeurs" subtitle="Ce qui nous guide">
            <ul className="values-list">
              <li>
                <FontAwesomeIcon icon={faBalanceScale} className="icon justice" /> Justice & égalité
              </li>
              <li>
                <FontAwesomeIcon icon={faFire} className="icon passion" /> Passion et exigence
              </li>
              <li>
                <FontAwesomeIcon icon={faHandshake} className="icon solidarity" /> Solidarité et respect
              </li>
            </ul>
          </Card>

          <Card title="Dates clés" subtitle="Les premières étapes">
            <div className="history-timeline">
              {historyEvents.map((event, index) => (
                <div
                  key={index}
                  className="history-event"
                  onClick={() => handleEventClick(event)}
                >
                  <p className="event-date">{event.date}</p>
                  <p className="event-description">{event.description}</p>
                </div>
              ))}
            </div>

            {selectedEvent && (
              <div className="modal-overlay" onClick={handleCloseModal}>
                <div
                  className="modal-content"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button className="close-button" onClick={handleCloseModal}>
                    ✕
                  </button>
                  <h3 className="modal-title">{selectedEvent.date}</h3>
                  <p className="modal-description">{selectedEvent.description}</p>
                </div>
              </div>
            )}
          </Card>

          <Card title="Rejoindre Timeless" subtitle="Nous chercherons toujours le talent">
            <p className="text-sm text-slate-600">
              Tu veux en savoir plus sur nos recrutements, partenariats ou collaborations ? 
              Clique sur « Nous rejoindre » dans le menu.
            </p>
          </Card>
        </aside>
      </div>

      <footer className="history-footer">
        <p className="footer-text">
          Certaines histoires ne s'arrêtent pas. Elles deviennent{" "}
          <span className="footer-highlight">Timeless</span>.
        </p>
      </footer>
    </section>
  );
}
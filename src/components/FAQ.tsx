import { useState } from 'react';

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "Comment puis-je rejoindre Timeless Esports?",
      answer: "Pour rejoindre notre équipe, vous devez d'abord démontrer votre excellence compétitive en participant à nos tryouts réguliers. Visitez notre page Contact pour exprimer votre intérêt. Nous recherchons des joueurs passionnés et talentueux avec un potentiel de champion."
    },
    {
      id: 2,
      question: "Quels jeux Timeless Esports joue-t-elle?",
      answer: "Nous compétitionnons dans les titres esports majeurs incluant Valorant, League of Legends, CS2, et Rocket League. Nos équipes participent aux plus grands tournois internationaux dans chaque titre."
    },
    {
      id: 3,
      question: "Où puis-je regarder les streams Timeless Esports?",
      answer: "Nos contenus en direct sont disponibles sur Twitch, YouTube, et TikTok. Consultez notre section Live Streams pour les horaires de nos prochaines diffusions et retrouvez nos archives sur YouTube."
    },
    {
      id: 4,
      question: "Comment puis-je devenir un fan ou une fan officielle?",
      answer: "Rejoignez notre communauté en nous suivant sur les réseaux sociaux, en vous inscrivant à notre newsletter, et en participant à nos événements communautaires. Les fans officiels obtiennent accès à du contenu exclusif et à des avantages spéciaux."
    },
    {
      id: 5,
      question: "Timeless Esports accepte-t-elle les partenariats de sponsoring?",
      answer: "Oui! Nous cherchons activement des partenaires qui partagent nos valeurs. Pour discuter des opportunités de sponsoring, contactez-nous via l'adresse contact@timeless-esports.com avec votre proposition détaillée."
    },
    {
      id: 6,
      question: "Quel est le palmarès de Timeless Esports?",
      answer: "Nous avons remporté plus de 150 tournois et établi plusieurs records en esports compétitif. Notre équipe Valorant a remporté 3 titres majeurs internationaux, tandis que notre roster LoL est passé aux Mondiaux deux fois."
    },
    {
      id: 7,
      question: "Comment puis-je acheter des produits dérivés Timeless Esports?",
      answer: "Notre collection de merchandises officielle est disponible sur notre boutique en ligne. Visitez la section Merch pour parcourir nos vêtements, accessoires, et équipements de gaming aux couleurs de Timeless Esports."
    },
    {
      id: 8,
      question: "Timeless Esports propose-t-elle des bourses ou du coaching?",
      answer: "Oui, nous offrons des opportunités de coaching professionnel et de mentoring pour les joueurs talentués. Nous proposons également des bourses académiques pour nos joueurs étudiants. Contactez-nous pour plus de détails."
    }
  ];

  const toggleExpanded = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <h2 className="section-title">Questions Fréquemment Posées</h2>
        
        <div className="faq-container">
          {faqItems.map((item) => (
            <div key={item.id} className="faq-item">
              <button 
                className={`faq-question ${expandedId === item.id ? 'active' : ''}`}
                onClick={() => toggleExpanded(item.id)}
              >
                <span className="faq-text">{item.question}</span>
                <span className="faq-icon">{expandedId === item.id ? '−' : '+'}</span>
              </button>
              {expandedId === item.id && (
                <div className="faq-answer">
                  <p>{item.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

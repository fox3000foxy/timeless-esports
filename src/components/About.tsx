import { useEffect, useState } from 'react';

const About = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 150; // Remplacez par votre nombre cible
    const duration = 2000; // Durée de l'animation en ms
    const increment = end / (duration / 10);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        clearInterval(counter);
        setCount(end);
      } else {
        setCount(Math.ceil(start));
      }
    }, 10);

    return () => clearInterval(counter);
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">À Propos de Timeless Esports</h2>
        
        <div className="about-content">
          <div className="about-story">
            <h3>Notre Histoire</h3>
            <p>
              Fondée en 2019, Timeless Esports est née de la passion d'une communauté de joueurs compétitifs et d'amateurs d'esports. 
              Ce qui a commencé comme un petit groupe de passionnés s'est transformé en une organisation professionnelle reconnue, 
              compétant dans les plus grands tournois mondiaux.
            </p>
            <p>
              Nous avons toujours cru que l'esports n'était pas qu'un jeu, mais une discipline légitime exigeant dévouement, 
              stratégie et excellence. Notre parcours nous a menés à remporter plusieurs titres prestigieux et à établir des 
              partenariats avec les plus grandes marques de l'industrie.
            </p>
          </div>

          <div className="about-mission">
            <h3>Notre Mission</h3>
            <p>
              Développer des talents exceptionnels et créer une plateforme où l'excellence compétitive rencontre l'innovation. 
              Nous nous engageons à :
            </p>
            <ul className="mission-list">
              <li>Soutenir et former les meilleurs joueurs et équipes d'esports</li>
              <li>Créer des expériences mémorables pour nos fans et communauté</li>
              <li>Contribuer à la légitimité et au développement de l'esports professionnel</li>
              <li>Démontrer l'intégrité, le respect et l'excellence dans tout ce que nous faisons</li>
            </ul>
          </div>

          <div className="about-values">
            <h3>Nos Valeurs</h3>
            <div className="values-grid">
              <div className="value-card">
                <h4>Excellence</h4>
                <p>Nous poursuivons l'excellence dans chaque compétition et projet.</p>
              </div>
              <div className="value-card">
                <h4>Intégrité</h4>
                <p>Nous jouons équitablement et honnêtement, dans le respect des règles.</p>
              </div>
              <div className="value-card">
                <h4>Communauté</h4>
                <p>Nous construisons une communauté forte et inclusive d'esports.</p>
              </div>
              <div className="value-card">
                <h4>Innovation</h4>
                <p>Nous innovons constamment pour rester à la pointe du secteur.</p>
              </div>
            </div>
          </div>

          <div className="about-stats">
            <h3>Nos Accomplissements</h3>
            <div className="stats-grid">
              <div className="stat-item">
                <span className="stat-number">{count}+</span>
                <span className="stat-label">Tournois Remportés</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Joueurs Professionnels</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">1M+</span>
                <span className="stat-label">Fans et Followers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">25+</span>
                <span className="stat-label">Sponsors Partenaires</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

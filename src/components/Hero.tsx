import { useEffect, useState } from 'react';

const Hero = () => {
  const [count, setCount] = useState(0);
  const [viewers, setViewers] = useState(0);
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    const animateCounter = (start: number, end: number, duration: number, setState: React.Dispatch<React.SetStateAction<number>>) => {
      let current = start;
      const increment = end / (duration / 10);
      const counter = setInterval(() => {
        current += increment;
        if (current >= end) {
          clearInterval(counter);
          setState(end);
        } else {
          setState(Math.ceil(current));
        }
      }, 10);
    };

    animateCounter(0, 3, 1000, setCount);
    animateCounter(0, 53, 1000, setViewers);
    animateCounter(0, 1261, 1000, setFollowers);
  }, []);

  return (
    <section
      id="home"
      className="hero"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/hero.png)",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title">
          TIMELESS <span className="highlight">ESPORT</span>
        </h1>
        <p className="hero-subtitle">
          L'excellence dans l'esport, au-delà du temps
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">{count}</span>
            <span className="stat-label">Compétitions Gagnées</span>
          </div>
          <div className="stat">
            <span className="stat-number">{viewers}</span>
            <span className="stat-label">Spectateurs Actuels</span>
          </div>
          <div className="stat">
            <span className="stat-number">{followers}</span>
            <span className="stat-label">Abonnés Totaux</span>
          </div>
        </div>
      </div>
      <div className="hero-bg-effects">
        <div className="effect-1"></div>
        <div className="effect-2"></div>
        <div className="effect-3"></div>
      </div>
    </section>
  );
};

export default Hero;
const Hero = () => {
  return (
    <section
      id="home"
      className="hero"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(/assets/hero.png)",
        // backgroundSize: "100% 100%",
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
            <span className="stat-number">3</span>
            <span className="stat-label">Tournois Gagnés</span>
          </div>
          <div className="stat">
            <span className="stat-number">1</span>
            <span className="stat-label">Jeu Compétitif</span>
          </div>
          <div className="stat">
            <span className="stat-number">250K+</span>
            <span className="stat-label">Followers</span>
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
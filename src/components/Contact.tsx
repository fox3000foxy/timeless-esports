const Contact = () => {
  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   // Logique de soumission du formulaire à implémenter
  //   console.log('Formulaire soumis');
  // };

  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Nous Contacter</h2>
        {/* <div className="contact-content">
          <div className="contact-info">
            <h3>Rejoignez-nous</h3>
            <p>Intéressé par l'esport compétitif ? Contactez-nous pour en savoir plus sur nos équipes et opportunités.</p>
            <div className="contact-links">
              <a href="#" className="contact-link">Discord</a>
              <a href="#" className="contact-link">Twitter</a>
              <a href="#" className="contact-link">Twitch</a>
              <a href="#" className="contact-link">YouTube</a>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <input type="text" placeholder="Votre nom" className="form-input" required />
            <input type="email" placeholder="Votre email" className="form-input" required />
            <select className="form-input" required>
              <option value="">Jeu d'intérêt</option>
              <option value="valorant">Valorant</option>
              <option value="lol">League of Legends</option>
              <option value="cs2">CS2</option>
              <option value="rocket-league">Rocket League</option>
            </select>
            <textarea 
              placeholder="Votre message" 
              className="form-textarea"
              required
            ></textarea>
            <button type="submit" className="submit-btn">Envoyer</button>
          </form>
        </div> */}
        <div className="contact-email" style={{ textAlign: 'center', marginTop: '5rem' }}>
          <h3>Contactez-nous</h3>
          <p>Pour toute question ou demande, écrivez-nous à :</p>
          <a href="mailto:contact@timeless-esports.com" style={{
            color: '#1DA1F2',
            textDecoration: 'none',
            fontWeight: 'bold',
            fontSize: '1.2rem',
            display: 'inline-block',
            marginTop: '1rem',
            padding: '0.5rem 1rem',
            border: '2px solid #1DA1F2',
            borderRadius: '8px',
            transition: 'background-color 0.3s, color 0.3s'
          }}
          onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1DA1F2';
              e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
              e.currentTarget.style.color = '#1DA1F2';
          }}>
              contact@timeless-esports.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
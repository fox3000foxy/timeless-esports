const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Nous Contacter</h2>
        <div
          className="contact-email"
          style={{ textAlign: "center", marginTop: "5rem" }}
        >
          <h3>Contactez-nous</h3>
          <p>Pour toute question ou demande, écrivez-nous à :</p>
          <a
            href="mailto:contact@timeless-esports.com"
            style={{
              color: "#1DA1F2",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "1.2rem",
              display: "inline-block",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              border: "2px solid #1DA1F2",
              borderRadius: "8px",
              transition: "background-color 0.3s, color 0.3s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1DA1F2";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#1DA1F2";
            }}
          >
            contact@timeless-esports.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

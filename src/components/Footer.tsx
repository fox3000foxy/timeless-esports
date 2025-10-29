const Footer = () => {
  return (
    <footer
      className="footer-section"
      style={{
        backgroundColor: '#1a1a1a',
        color: '#fff',
        padding: '2rem 1rem',
        textAlign: 'center',
        fontSize: '0.9rem',
      }}
    >
      <div
        className="footer-content"
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <p style={{ marginBottom: '1rem' }}>
          &copy; 2025 Timeless Esport. Tous droits réservés.
        </p>
        <p style={{ marginBottom: '1rem' }}>
          Suivez-nous sur nos réseaux sociaux :
        </p>
        {/* <ul
          className="social-links"
          style={{
            listStyle: 'none',
            padding: 0,
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
          }}
        >
          <li>
            <a
              href="https://twitter.com/timelessesport"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1DA1F2',
                textDecoration: 'none',
              }}
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://instagram.com/timelessesport"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#E1306C',
                textDecoration: 'none',
              }}
            >
              Instagram
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com/timelessesport"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#4267B2',
                textDecoration: 'none',
              }}
            >
              Facebook
            </a>
          </li>
        </ul> */}
      </div>
    </footer>
  );
};

export default Footer;
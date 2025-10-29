interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const navigation = [
    { id: 'home', label: 'Accueil' },
    { id: 'team', label: 'Équipe' },
    { id: 'tournaments', label: 'Tournois' },
    { id: 'merch', label: 'Boutique' },
    { id: 'news', label: 'Actualités' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img src="/assets/logo.png" style={{ width: "64px", marginRight: "2rem" }} />
          <div className="logo-placeholder">
            <span>TIMELESS</span>
            <span className="esport-text">ESPORT</span>
          </div>
        </div>
        <nav className="navigation">
          {navigation.map(item => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { useState } from "react";
import "../styles/Header.css";

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

const Header = ({ activeSection, setActiveSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigation = [
    { id: "home", label: "Accueil" },
    { id: "history", label: "Histoire" },
    { id: "games", label: "Jeux" },
    { id: "schedule", label: "Calendrier" },
    { id: "team", label: "Équipe" },
    { id: "tournaments", label: "Tournois" },
    { id: "merch", label: "Boutique" },
    { id: "news", label: "Actualités" },
    { id: "recruitment", label: "Recrutement" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo-section">
          <img
            src="/assets/logo.avif"
            style={{ width: "64px", marginRight: "2rem" }}
            alt="Logo Timeless"
          />
          <div className="logo-placeholder">
            <span>TIMELESS</span>
            {/* <span className="esport-text">ESPORT</span> */}
          </div>
        </div>
        <button
          className={`hamburger-menu ${isMenuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <nav className={`navigation ${isMenuOpen ? "open" : ""}`}>
          {navigation.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`nav-item ${activeSection === item.id ? "active" : ""}`}
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

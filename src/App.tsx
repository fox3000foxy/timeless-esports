import { useEffect, useState } from 'react';
import './App.css';

// Import des composants
import { Contact, Footer, Header, Hero, Merch, News, Sponsors, Team, Tournaments } from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home')

  // Détection de la section active basée sur le scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'team', 'tournaments', 'merch', 'news', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app">
      {/* Header fixe avec navigation */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      
      {/* Contenu principal - toutes les sections sur une seule page */}
      <main className="main">
        <Hero />
        <Tournaments />
        <Team />
        <Sponsors />
        <Merch />
        <News />
        <Contact />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  )
}

export default App

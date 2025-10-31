import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header activeSection={activeSection} setActiveSection={setActiveSection} />
              <main className="main">
                <Hero />
                <Tournaments />
                <Team />
                <Sponsors />
                <Merch />
                <News />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        {/* <Route path="/instaPost/:member" element={<InstaPost />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App

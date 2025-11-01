import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

// Import des composants
import {
  Contact,
  Footer,
  GamesList,
  Header,
  Hero,
  History,
  Merch,
  News,
  Recruitment,
  Schedule,
  Sponsors,
  Team,
  Tournaments,
} from "./components";

function App() {
  const [activeSection, setActiveSection] = useState("home");

  // Détection de la section active basée sur le scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "history",
        "games",
        "schedule",
        "team",
        "tournaments",
        "merch",
        "news",
        "recruitment",
        "contact",
      ];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="app">
              <Header
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
              <main className="main">
                <Hero />
                <History />
                <GamesList />
                <Schedule />
                <Team />
                <Tournaments />
                <Sponsors />
                <Merch />
                <News />
                <Recruitment />
                <Contact />
              </main>
              <Footer />
            </div>
          }
        />
        {/* <Route path="/player/:playerId" element={<PlayerProfile />} /> */}
        {/* <Route path="/instaPost/:member" element={<InstaPost />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import { Suspense, lazy, useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles/App.css";

// Lazy loading des composants
const Contact = lazy(() => import("./components/Contact"));
const Footer = lazy(() => import("./components/Footer"));
const GamesList = lazy(() => import("./components/GamesList"));
const Header = lazy(() => import("./components/Header"));
const Hero = lazy(() => import("./components/Hero"));
const History = lazy(() => import("./components/History"));
const Merch = lazy(() => import("./components/Merch"));
const News = lazy(() => import("./components/News"));
const Recruitment = lazy(() => import("./components/Recruitment"));
const Schedule = lazy(() => import("./components/Schedule"));
const Sponsors = lazy(() => import("./components/Sponsors"));
const Team = lazy(() => import("./components/Team"));
const Tournaments = lazy(() => import("./components/Tournaments"));

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
						<Suspense fallback={<div>Chargement...</div>}>
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
						</Suspense>
					}
				/>
				{/* <Route path="/player/:playerId" element={<PlayerProfile />} /> */}
				{/* <Route path="/instaPost/:member" element={<InstaPost />} /> */}
			</Routes>
		</BrowserRouter>
	);
}

export default App;

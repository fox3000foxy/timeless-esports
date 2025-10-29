const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      title: "Tournoi International 2024",
      category: "Tournament",
      image: "tournament-01.jpg",
      description: "Finals du Championnat Mondial Valorant"
    },
    {
      id: 2,
      title: "Team Celebration",
      category: "Team",
      image: "team-celebration.jpg",
      description: "Notre équipe League of Legends célèbre une victoire majeure"
    },
    {
      id: 3,
      title: "Pro Gaming Setup",
      category: "Equipment",
      image: "gaming-setup.jpg",
      description: "Nos stations de jeu professionnelles dernière génération"
    },
    {
      id: 4,
      title: "Esports Arena",
      category: "Venue",
      image: "arena-01.jpg",
      description: "Intérieur de notre arène esports principale"
    },
    {
      id: 5,
      title: "Team Training",
      category: "Training",
      image: "training-session.jpg",
      description: "Séance d'entraînement intensive de nos joueurs"
    },
    {
      id: 6,
      title: "Awards Ceremony",
      category: "Tournament",
      image: "awards.jpg",
      description: "Remise des prix du championnat régional"
    },
    {
      id: 7,
      title: "Sponsors Event",
      category: "Event",
      image: "sponsors-event.jpg",
      description: "Événement de réseautage avec nos partenaires"
    },
    {
      id: 8,
      title: "Community Meetup",
      category: "Community",
      image: "meetup.jpg",
      description: "Rencontre avec les fans lors d'un événement communautaire"
    },
    {
      id: 9,
      title: "Streaming Studio",
      category: "Facility",
      image: "studio.jpg",
      description: "Notre studio de streaming professionnel"
    },
    {
      id: 10,
      title: "Player Interview",
      category: "Media",
      image: "interview.jpg",
      description: "Interview exclusive avec un joueur vedette"
    },
    {
      id: 11,
      title: "League of Legends Clash",
      category: "Tournament",
      image: "lol-clash.jpg",
      description: "Bataille intense en phase de groupes"
    },
    {
      id: 12,
      title: "Rocket League Championship",
      category: "Tournament",
      image: "rl-championship.jpg",
      description: "Match décisif du championnat Rocket League"
    }
  ];

  return (
    <section id="gallery" className="gallery-section">
      <div className="container">
        <h2 className="section-title">Galerie</h2>
        <p className="section-subtitle">Découvrez les moments forts de Timeless Esports</p>
        
        <div className="gallery-grid">
          {galleryItems.map((item) => (
            <div key={item.id} className="gallery-item">
              <div className="gallery-image-wrapper">
                <img 
                  src={`/assets/gallery/${item.image}`} 
                  alt={item.title}
                  className="gallery-image"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="300" height="300"%3E%3Crect fill="%23222" width="300" height="300"/%3E%3Ctext x="50%" y="50%" font-size="18" fill="%23999" text-anchor="middle" dy=".3em"%3E{item.title}%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="gallery-overlay">
                  <div className="gallery-info">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                    <span className="gallery-category">{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;

interface Testimonial {
  id: number;
  name: string;
  title: string;
  organization: string;
  content: string;
  image: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Thunder",
      title: "Pro Player",
      organization: "Timeless Esports Valorant",
      content: "Rejoindre Timeless Esports a transformé ma carrière. Le support, l'infrastructure et l'équipe me permettent de me concentrer à 100% sur mon jeu. C'est ici que les champions sont forgés.",
      image: "player-1.jpg"
    },
    {
      id: 2,
      name: "Jordan Phoenix",
      title: "Streamer Professionnel",
      organization: "Timeless Esports",
      content: "L'organisation m'a donnée la plateforme pour construire ma communauté. Leurs investissements dans le contenu de qualité et le streaming professionnel sont sans égal dans l'industrie.",
      image: "streamer-1.jpg"
    },
    {
      id: 3,
      name: "Shadow Knight",
      title: "In-game Leader",
      organization: "Timeless Esports League of Legends",
      content: "La structure et le coaching fournis par Timeless ont vraiment élevé notre jeu d'équipe. Nous avons gagné nos premiers titres majeurs depuis que nous avons rejoint l'organisation.",
      image: "player-2.jpg"
    },
    {
      id: 4,
      name: "Sophie Valorant",
      title: "Directrice Marketing",
      organization: "Sponsor Majeur",
      content: "Timeless Esports est un partenaire exceptionnel. Leur professionnalisme, leur engagement envers l'excellence et leur base de fans engagée font d'eux un choix parfait pour les marques.",
      image: "partner-1.jpg"
    },
    {
      id: 5,
      name: "Marcus Elite",
      title: "Coach Esports",
      organization: "Timeless Esports",
      content: "Travailler avec Timeless m'a permis de former certains des meilleurs talents de l'esports. L'organisation crée un environnement où chacun peut exceller.",
      image: "coach-1.jpg"
    },
    {
      id: 6,
      name: "Emma Esports Fan",
      title: "Communauté",
      organization: "Fan Officielle Timeless",
      content: "Je suis fan de Timeless depuis le début. Leur transparence, leur implication avec la communauté et les performances exceptionnelles les rendent spéciaux. Fière supporter!",
      image: "fan-1.jpg"
    }
  ];

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Témoignages</h2>
        <p className="section-subtitle">Ce que les gens disent de Timeless Esports</p>
        
        <div className="testimonials-grid" data-aos="fade-up">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img 
                  src={`/assets/testimonials/${testimonial.image}`}
                  alt={testimonial.name}
                  className="testimonial-image"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="80" height="80"%3E%3Ccircle cx="40" cy="40" r="40" fill="%23333"/%3E%3Ctext x="50%" y="50%" font-size="12" fill="%23999" text-anchor="middle" dy=".3em"%3EAvatar%3C/text%3E%3C/svg%3E';
                  }}
                />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <p className="testimonial-title">{testimonial.title}</p>
                  <p className="testimonial-org">{testimonial.organization}</p>
                </div>
              </div>
              <p className="testimonial-content">"{testimonial.content}"</p>
              <div className="testimonial-rating">
                {'⭐'.repeat(5)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

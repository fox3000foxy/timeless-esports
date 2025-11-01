import { useState } from "react";
import "../styles/Recruitment.css";

const Recruitment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    discord: "",
    game: "",
    rank: "",
    experience: "",
    motivation: "",
  });

  //   const positions = [
  //     {
  //       game: 'League of Legends',
  //       roles: ['Top Laner', 'Support'],
  //       requirements: ['Master+', '3+ ans d\'expérience']
  //     },
  //     {
  //       game: 'Valorant',
  //       roles: ['IGL', 'Entry Fragger'],
  //       requirements: ['Immortal+', 'Expérience en équipe']
  //     }
  //   ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const webhookResponse = await fetch(
        "https://discord-webhooks.fox3000foxy.workers.dev/timeless",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            content: null,
            embeds: [
              {
                title: `Nouvelle candidature de ${formData.name}`,
                description: formData.motivation,
                color: 15158332, // Rouge Timeless (#ff2b2b en décimal)
                fields: [
                  {
                    name: "Nom",
                    value: formData.name,
                    inline: true,
                  },
                  {
                    name: "Email",
                    value: formData.email,
                    inline: true,
                  },
                  {
                    name: "Discord",
                    value: formData.discord,
                    inline: true,
                  },
                  {
                    name: "Jeu",
                    value:
                      formData.game === "lol"
                        ? "League of Legends"
                        : "Valorant",
                    inline: true,
                  },
                  {
                    name: "Rang",
                    value: formData.rank,
                    inline: true,
                  },
                  {
                    name: "Expérience",
                    value: formData.experience,
                    inline: false,
                  },
                ],
                footer: {
                  text: "Nouvelle candidature depuis timeless-esports.com",
                  icon_url: "https://timeless-esports.com/assets/logo.avif",
                },
                timestamp: new Date().toISOString(),
              },
            ],
            username: "Recrutement Timeless",
            avatar_url: "https://timeless-esports.com/assets/logo.avif",
          }),
        },
      );

      if (webhookResponse.ok) {
        alert("Votre candidature a été envoyée avec succès !");
        setFormData({
          name: "",
          email: "",
          discord: "",
          game: "",
          rank: "",
          experience: "",
          motivation: "",
        });
      } else {
        throw new Error("Erreur lors de l'envoi de la candidature");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert(
        "Une erreur est survenue lors de l'envoi de votre candidature. Veuillez réessayer.",
      );
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <section className="recruitment-section" id="recruitment">
      <div className="container">
        <h2 className="section-title">Rejoindre Timeless</h2>

        <div className="recruitment-content">
          {/* <div className="positions-list">
            {positions.map((pos, index) => (
              <div 
                key={index} 
                className="position-card"
               
                data-aos-delay={index * 100}
              >
                <h4>{pos.game}</h4>
                <div className="roles">
                  <strong>Rôles recherchés:</strong>
                  <ul>
                    {pos.roles.map((role, i) => (
                      <li key={i}>{role}</li>
                    ))}
                  </ul>
                </div>
                <div className="requirements">
                  <strong>Prérequis:</strong>
                  <ul>
                    {pos.requirements.map((req, i) => (
                      <li key={i}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div> */}

          <form className="recruitment-form" onSubmit={handleSubmit}>
            <h3>Candidature</h3>

            <div className="form-grid">
              <div className="form-group">
                <label htmlFor="name">Nom Complet</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="discord">Discord</label>
                <input
                  type="text"
                  id="discord"
                  name="discord"
                  value={formData.discord}
                  onChange={handleChange}
                  required
                  placeholder="exemple#0000"
                />
              </div>

              <div className="form-group">
                <label htmlFor="game">Jeu</label>
                <select
                  id="game"
                  name="game"
                  value={formData.game}
                  onChange={handleChange}
                  required
                >
                  <option value="">Sélectionnez un jeu</option>
                  {/* <option value="lol">League of Legends</option> */}
                  <option value="valorant">Valorant</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="rank">Rang Actuel</label>
                <input
                  type="text"
                  id="rank"
                  name="rank"
                  value={formData.rank}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="experience">Expérience</label>
                <textarea
                  id="experience"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  placeholder="Décrivez votre expérience en équipe..."
                />
              </div>

              <div className="form-group full-width">
                <label htmlFor="motivation">Motivation</label>
                <textarea
                  id="motivation"
                  name="motivation"
                  value={formData.motivation}
                  onChange={handleChange}
                  required
                  placeholder="Pourquoi souhaitez-vous rejoindre Timeless?"
                />
              </div>
            </div>

            <button type="submit" className="submit-button">
              Envoyer ma candidature
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Recruitment;

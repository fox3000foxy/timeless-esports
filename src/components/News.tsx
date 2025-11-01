import "../styles/News.css";

const News = () => {
  const newsArticles = [
    {
      title: "Cloud9 se sépare de neT",
      content:
        "Cloud9 a officiellement mis fin à sa collaboration avec le joueur Sentinel neT alors que l’organisation se prépare pour la saison VCT 2026.",
      date: "29 octobre 2025",
    },
    {
      title: "Sentinels se sépare de Zellsis",
      content:
        "Le vétéran des Sentinels, Zellsis, quitte l’organisation après deux années passées avec l’équipe.",
      date: "29 octobre 2025",
    },
    {
      title: "MIBR finalise son nouveau roster avec Verno et tex",
      content:
        "MIBR a conclu un accord verbal avec les deux joueurs, complétant ainsi son roster pour la saison VCT 2026.",
      date: "28 octobre 2025",
    },
    {
      title: "Envy remporte la VCT Americas Ascension",
      content:
        "Suite à une victoire 3-1 contre TSM, Envy décroche son ticket pour la VCT Americas 2026.",
      date: "26 octobre 2025",
    },
    {
      title: "Sylvan rejoint Team Secret",
      content:
        "Sylvan a officiellement rejoint Team Secret, renforçant leur roster pour la saison à venir.",
      date: "25 octobre 2025",
    },
    {
      title: "Victoire au Championnat Régional",
      content:
        "Notre équipe Valorant remporte le championnat régional après une finale époustouflante.",
      date: "25 octobre 2024",
    },
    {
      title: "Nouveau partenariat stratégique",
      content:
        "Timeless annonce un partenariat stratégique pour la saison 2025.",
      date: "20 octobre 2024",
    },
    {
      title: "Recrutement ouvert",
      content:
        "Nous recherchons de nouveaux talents pour rejoindre nos équipes compétitives.",
      date: "15 octobre 2024",
    },
    {
      title: "Lancement de la nouvelle boutique",
      content:
        "Découvrez notre nouvelle boutique en ligne avec des produits exclusifs pour les fans.",
      date: "10 octobre 2024",
    },
    {
      title: "Analyse de la saison 2024",
      content:
        "Retour sur les moments forts de la saison 2024 et nos objectifs pour l’année prochaine.",
      date: "5 octobre 2024",
    },
    {
      title: "Tournoi interne",
      content:
        "Un tournoi interne a été organisé pour renforcer les liens entre les membres de l’équipe.",
      date: "1 octobre 2024",
    },
    {
      title: "Annonce d’un Bootcamp International",
      content:
        "Timeless organise un bootcamp international avec des équipes de renom pour se préparer aux prochaines compétitions. Une opportunité unique pour échanger des stratégies et renforcer les liens dans la communauté esport.",
      date: "30 octobre 2025",
    },
  ];

  return (
    <section id="news" className="news-section">
      <div className="container">
        <h2 className="section-title">Actualités</h2>
        <div className="news-grid">
          {newsArticles.map((article, index) => (
            <article key={index} className="news-card">
              <h3>{article.title}</h3>
              <p>{article.content}</p>
              <span className="news-date">{article.date}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;

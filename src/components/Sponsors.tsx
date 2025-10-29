import './Sponsors.css';

const Sponsors = () => {
    const sponsors = [
        {
            name: 'Corsair',
            icon: '/assets/sponsors/corsair.avif',
            description: 'Corsair est un leader mondial dans la fabrication de matériel gaming haut de gamme, offrant des produits innovants pour les joueurs et les créateurs de contenu.'
        },
        {
            name: 'Razer',
            icon: '/assets/sponsors/razer.avif',
            description: 'Razer est une marque emblématique dans le monde du gaming, connue pour ses périphériques et ordinateurs portables de haute performance.'
        },
        {
            name: 'Discord',
            icon: '/assets/sponsors/discord.avif',
            description: 'Discord est la plateforme incontournable pour les communautés de joueurs, offrant des outils de communication modernes et efficaces.'
        },
        {
            name: 'Tencent',
            icon: '/assets/sponsors/tencent.avif',
            description: 'Tencent est un géant technologique et un acteur majeur dans l’industrie du jeu vidéo, soutenant des équipes et des événements à travers le monde.'
        }
    ];

    return (
        <section id="sponsors" className="sponsors-section">
            <div className="container">
                <h2 className="section-title">Nos Sponsors</h2>
                <p className="section-subtitle">Nous sommes fiers d'être soutenus par ces leaders de l'industrie, qui partagent notre passion pour l'excellence et l'innovation.</p>
                <div className="sponsors-grid">
                    {sponsors.map((sponsor, index) => (
                        <div key={index} className="sponsor-card">
                            <div className="sponsor-icon" style={{
                                // marginBottom: '4rem'
                            }}>
                                <img src={sponsor.icon} alt={sponsor.name} style={{
                                    height: '102px',
                                    width: 'auto',
                                    objectFit: 'contain'
                                }} className="sponsor-logo" />
                                <h3 className="sponsor-name">{sponsor.name}</h3>
                            </div>
                            <div className="sponsor-content">
                                <p className="sponsor-description">{sponsor.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;
// Types pour les membres de l'équipe
export interface TeamMember {
    name: string;
    role: string;
    game: string;
    avatar: string;
    bio: string;
    fullStory?: string;
    playstyle: string;
    nickname: string
    stats: {
        kd: string;
        kast: string;
        clutchRate: string;
        winRate: string;
        firstBloods: string;
    };
    achievements: string[];
    instagram: string; // Ajout de la propriété Instagram
}

// Données des membres de l'équipe Timeless Esport
export const teamMembersData: TeamMember[] = [
    {
        name: 'Emma',
        role: 'Controller - Astra',
        game: 'Valorant',
        avatar: '/assets/players/emma.avif',
        bio: 'Originaire de Paris, Emma rêvait de devenir graphiste, mais elle a vite réalisé que les commissions ne payaient pas assez. Inspirée par son amie Lily, elle s\'est plongée dans le monde du gaming. Grâce à un entraînement acharné, elle est devenue une joueuse redoutable, maîtrisant Astra avec une précision cosmique.',
        fullStory: `Emma a grandi dans le 11e arrondissement de Paris, rêvant d'une vie d'artiste. À 16 ans, elle s'est essayée à l'esport en tant que simple passe-temps après l'école. Ce qui devait rester un hobby s'est transformé en passion brûlante. Elle a rejoint Timeless Esports après des performances exceptionnelles dans les ligues régionales, apportant sa perspective artistique à la stratégie de jeu. Elle voit chaque round comme une toile, chaque placement d'Astra comme un coup de pinceau précis. Son rôle de Controller dépasse la simple mécanique : c'est une orchestration spatiale et stratégique.`,
        playstyle: `Spatiale et méthodique. Emma excelle dans la gestion de l'espace et la création d'avantages positionnels. Elle ne joue pas agressivement mais avec une patience stratégique calculée.`,
        stats: {
            kd: '0.95',
            kast: '82%',
            clutchRate: '35%',
            winRate: '68%',
            firstBloods: '0.12/round'
        },
        nickname: 'Emster',
        achievements: ['Top 5 Regional Controller', 'Team MVP March 2024', 'Best Map Control 2024'],
        instagram: 'https://www.instagram.com/emster350/' // Ajout du lien Instagram
    },
    {
        name: 'Lin',
        role: 'Sentinel - Killjoy',
        game: 'Valorant',
        avatar: '/assets/players/lin.avif',
        bio: `Originaire de Corée du Sud, Lin a commencé à jouer dans les cybercafés de son quartier. Ses amis ont rapidement remarqué son potentiel dans l'esport. Admiratrice de Faker, elle s'est spécialisée dans le rôle de Sentinel, utilisant Killjoy pour sécuriser les sites avec des gadgets ingénieux.`,
        fullStory: `Lin a découvert l'esport à 13 ans dans un PC bang de Séoul. Contrairement à ses parents qui rêvaient pour elle d'une carrière médicale, elle a poursuivi sa passion secrètement, entraînée après les cours. Son jeu patient et méthodique contraste avec l'agressivité typique des joueurs coréens, ce qui l'a rendue unique. Elle a progressé à travers les rangs locaux en menant discrètement son équipe vers des victoires stratégiques. Son adhésion à Timeless Esports représente son rêve de porter les couleurs de la Corée sur une scène internationale.`,
        playstyle: `Défensive et réfléchie. Lin joue avec une préparation minutieuse, plaçant ses gadgets Killjoy pour maximiser le contrôle du terrain. Sa force réside dans son anticipation des mouvements ennemis et sa capacité à créer des situations défavorables pour l'adversaire.`,
        stats: {
            kd: '1.05',
            kast: '85%',
            clutchRate: '62%',
            winRate: '71%',
            firstBloods: '0.08/round'
        },
        nickname: 'Colomb',
        achievements: ['Best Sentinel in Local League', 'Clutch Queen Award', 'Defensive Maestro 2024'],
        instagram: 'https://www.instagram.com/liny.un8941/' // Ajout du lien Instagram
    },
    {
        name: 'Emi',
        role: 'IGL & Duelist - Jett',
        game: 'Valorant',
        avatar: '/assets/players/emi.avif',
        bio: `Née à Shibuya au Japon, et élevée à La Ferté-Macé, en France, après l’accident qui a tué ses parents, Emi a développé une passion pour les jeux vidéo dès son plus jeune âge. Elle s'est rapidement spécialisée dans les FPS, trouvant son véritable talent dans Valorant. En tant que leader charismatique, elle excelle avec Jett, utilisant des mouvements rapides et des éliminations précises pour guider son équipe.`,
        fullStory: `Emi est née dans les rues animées de Shibuya où elle a grandi fascinée par la technologie et la compétition. À 14 ans, elle a participé à un tournoi Valorant local et a immédiatement su que c'était sa destinée. Son charisme naturel et son instinct stratégique l'ont rapidement propulsée au-dessus de la concurrence. Elle voit le jeu comme une danse, chaque movement de Jett comme une chorégraphie parfaitement orchestrée. Fondatrice de facto de Timeless Esports, elle incarne l'esprit d'innovation et de leadership du groupe.`,
        playstyle: `Dynamique et offensive. Emi joue avec une agressivité calculée, explorant les failles de la défense ennemie avec des peek rapides et des rotations impeccables. En tant qu'IGL, elle coordonne son équipe avec une clarté et une confiance remarquables, inspirant ses coéquipiers à se surpasser.`,
        stats: {
            kd: '1.47',
            kast: '78%',
            clutchRate: '55%',
            winRate: '73%',
            firstBloods: '0.40/round'
        },
        nickname: "TheUpsilonGirl",
        achievements: ['Local Tournament Winner', 'Best Duelist of the Month', 'Team Captain & Leader'],
        instagram: 'https://www.instagram.com/emitanaka_official' // Ajout du lien Instagram
    },
    {
        name: 'Marvin',
        role: 'Initiator - Sova',
        game: 'Valorant',
        avatar: '/assets/players/marvin.avif',
        bio: `Originaire des quartiers de Dijon, en France, Marvin a découvert sa passion pour les jeux vidéo en empruntant l'ordinateur familial pour jouer à Counter-Strike. Il a ensuite migré vers Valorant, où il utilise Sova pour traquer ses ennemis avec une stratégie et une précision exceptionnelles.`,
        fullStory: `Marvin a grandi dans un environnement modeste de Dijon, où l'esport n'était pas valorisé. Mais sa détermination inébranlable et sa passion pour les stratégies de jeu l'ont poussé à s'entraîner tard la nuit. Il s'est formé lui-même, en regardant des streamers et en analysant les replays. Son passage à Counter-Strike l'a enseigné la patience et la vision du terrain. Avec Valorant, il a trouvé son arme de prédilection : Sova. Il voit chaque round comme une enquête, chaque drone comme un outil de surveillance. Rejoindre Timeless Esports a représenté l'aboutissement de ses efforts souterrains.`,
        playstyle: `Analytique et prédictif. Marvin utilise ses drones Sova pour recueillir des informations cruciales et anticiper les mouvements ennemis. Son style de jeu est basé sur l'intelligence tactique et la préparation stratégique, ce qui en fait un atout précieux pour l'équipe.`,
        stats: {
            kd: '1.15',
            kast: '80%',
            clutchRate: '42%',
            winRate: '73%',
            firstBloods: '0.25/round'
        },
        nickname: 'Phantom',
        achievements: ['Top Initiator in Weekly Scrims', 'Utility Master Award', 'Best Recon Player'],
        instagram: 'https://www.instagram.com/ph.antom920/' // Ajout du lien Instagram
    },
    {
        name: 'Rami',
        role: 'Duelist - Phoenix',
        game: 'Valorant',
        avatar: '/assets/players/rami.avif',
        bio: `Originaire d'Inde, Rami a su se démarquer dans un pays où l'esport est encore sous-estimé. Avec son incroyable maîtrise de Phoenix, il embrase le champ de bataille et prouve que le talent peut briller, peu importe les obstacles.`,
        fullStory: `Ses parents rêvaient pour lui d'une carrière d'ingénieur, mais son cœur battait pour le gaming. Il a commencé sur des cybercafés locaux, progressant silencieusement à travers les rangs en ligne. Son mécanique de jeu est explosive et non conventionnelle, reflétant son caractère audacieux. Il a trouvé en Phoenix l'agent qui correspondait à son style agressif et impétueux. Son admission à Timeless Esports est un triomphe personnel, prouvant que le talent brille indépendamment de la géographie.`,
        playstyle: `Agressif et explosif. Rami joue avec une confiance débordante, cherchant des éliminations précoces et mettant la pression sur la défense ennemie. Son style chaotique mais efficace le rend imprévisible et redoutable, capable de changer le cours d'un round en quelques secondes.`,
        stats: {
            kd: '1.32',
            kast: '72%',
            clutchRate: '48%',
            winRate: '73%',
            firstBloods: '0.35/round'
        },
        nickname: 'Panther',
        achievements: ['Top Fragger in Local Matches', 'Flashiest Play Award', 'Most Aggressive Duelist'],
        instagram: 'https://www.instagram.com/rami_vemuri?igsh=MWYxYXlwbG9mYjhuOQ%3D%3D&utm_source=qr' // Ajout du lien Instagram
    }
];
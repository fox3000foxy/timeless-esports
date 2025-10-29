// Types pour les membres de l'équipe
export interface TeamMember {
    name: string;
    role: string;
    game: string;
    avatar: string;
    bio: string;
    nickname: string
    stats: {
        kd: string;
        kast: string;
        clutchRate: string;
        winRate: string;
        firstBloods: string;
    };
    achievements: string[];
}

// Données des membres de l'équipe Timeless Esport
export const teamMembersData: TeamMember[] = [
    {
        name: 'Emma',
        role: 'Controller - Astra',
        game: 'Valorant',
        avatar: '/assets/players/emma.png',
        bio: 'Originaire de Paris, Emma rêvait de devenir graphiste, mais elle a vite réalisé que les commissions ne payaient pas assez. Inspirée par son amie Lily, elle s’est plongée dans le monde du gaming. Grâce à un entraînement acharné, elle est devenue une joueuse redoutable, maîtrisant Astra avec une précision cosmique.',
        stats: {
            kd: '1.23',
            kast: '76%',
            clutchRate: '50%',
            winRate: '65%',
            firstBloods: '0.20/round'
        },
        nickname: 'Emster',
        achievements: ['Top 5 Regional Controller', 'Team MVP March 2024']
    },
    {
        name: 'Lin',
        role: 'Sentinel - Killjoy',
        game: 'Valorant',
        avatar: '/assets/players/lin.png',
        bio: 'Originaire de Corée du Sud, Lin a commencé à jouer dans les cybercafés de son quartier. Ses amis ont rapidement remarqué son potentiel dans l’esport. Admiratrice de Faker, elle s’est spécialisée dans le rôle de Sentinel, utilisant Killjoy pour sécuriser les sites avec des gadgets ingénieux.',
        stats: {
            kd: '1.15',
            kast: '72%',
            clutchRate: '68%',
            winRate: '60%',
            firstBloods: '0.10/round'
        },
        nickname: 'Colomb',
        achievements: ['Best Sentinel in Local League', 'Clutch Queen Award']
    },
    {
        name: 'Emi',
        role: 'IGL & Duelist - Jett',
        game: 'Valorant',
        avatar: '/assets/players/emi.png',
        bio: 'Née et élevée à Shibuya, au Japon, Emi a développé une passion pour les jeux vidéo dès son plus jeune âge. Elle s’est rapidement spécialisée dans les FPS, trouvant son véritable talent dans Valorant. En tant que leader charismatique, elle excelle avec Jett, utilisant des mouvements rapides et des éliminations précises pour guider son équipe.',
        stats: {
            kd: '1.47',
            kast: '78%',
            clutchRate: '55%',
            winRate: '73%',
            firstBloods: '0.40/round'
        },
        nickname: "Fox3000foxy",
        achievements: ['Local Tournament Winner', 'Best Duelist of the Month']
    },
    {
        name: 'Marvin',
        role: 'Initiator - Sova',
        game: 'Valorant',
        avatar: '/assets/players/marvin.png',
        bio: 'Originaire des quartiers de Dijon, en France, Marvin a découvert sa passion pour les jeux vidéo en empruntant l’ordinateur familial pour jouer à Counter-Strike. Il a ensuite migré vers Valorant, où il utilise Sova pour traquer ses ennemis avec une stratégie et une précision exceptionnelles.',
        stats: {
            kd: '1.10',
            kast: '74%',
            clutchRate: '45%',
            winRate: '58%',
            firstBloods: '0.31/round'
        },
        nickname: 'Panther',
        achievements: ['Top Initiator in Weekly Scrims', 'Utility Master Award']
    },
    {
        name: 'Rami',
        role: 'Duelist - Phoenix',
        game: 'Valorant',
        avatar: '/assets/players/rami.png',
        bio: 'Originaire d’Inde, Rami a su se démarquer dans un pays où l’esport est encore sous-estimé. Avec son incroyable maîtrise de Phoenix, il embrase le champ de bataille et prouve que le talent peut briller, peu importe les obstacles.',
        stats: {
            kd: '1.35',
            kast: '70%',
            clutchRate: '60%',
            winRate: '70%',
            firstBloods: '0.25/round'
        },
        nickname: 'Cthulhu',
        achievements: ['Top Fragger in Local Matches', 'Flashiest Play Award']
    }
];
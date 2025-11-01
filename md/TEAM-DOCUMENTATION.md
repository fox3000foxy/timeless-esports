# Documentation de l'Équipe Timeless

## 👥 Membres de l'Équipe

### 🎮 **Emi** - IGL & Duelist (Valorant)
- **Spécialité** : Stratégie et éliminations précises
- **Lore** : Stratège redoutable et tireuse d'élite, Emi mène ses équipiers vers la victoire avec une précision chirurgicale.
- **Stats** : K/D: 1.47 • Win Rate: 73%
- **Achievements** : Champion Régional 2024, MVP Finals VCT

### 🌟 **Emma** - Jungler & Shotcaller (League of Legends) 
- **Spécialité** : Contrôle de map et vision macro
- **Lore** : Maîtresse de la jungle, Emma contrôle le tempo des parties avec ses ganks imprévisibles et sa vision macro exceptionnelle.
- **Stats** : Rank: Challenger • KDA: 2.8
- **Achievements** : LFL Spring Champion, All-Star Team 2024

### 🎯 **Lin** - AWPer & Entry Fragger (CS2)
- **Spécialité** : Sniper d'élite et ouvertures tactiques
- **Lore** : Sniper légendaire aux réflexes surhumains, Lin terrorise les adversaires avec son AWP et ses angles impossibles.
- **Stats** : Rating 2.0: 1.34 • HS%: 67%
- **Achievements** : ESL Pro League Finalist, MVP BLAST Premier

### 🚀 **Marvin** - Mechanical Prodigy (Rocket League)
- **Spécialité** : Mécaniques avancées et freestyle
- **Lore** : Prodige de la mécanique, Marvin défie les lois de la physique avec ses flip resets et ses saves impossibles.
- **Stats** : Rank: SSL • Goals/Game: 1.2
- **Achievements** : RLCS World Championship, Freestyle King 2024

### 🧠 **Rami** - Coach & Analyst (Multi-Games)
- **Spécialité** : Analyse stratégique et coaching
- **Lore** : Cerveau tactique de l'équipe, Rami décode les stratégies adverses et forge les champions de demain.
- **Stats** : Win Rate as Coach: 78%
- **Achievements** : Coach of the Year, Strategic Mastermind Award

## 📁 Structure des Fichiers

### Images des Joueurs
```
public/assets/
├── emi.png     # Photo d'Emi
├── emma.png    # Photo d'Emma  
├── lin.avif     # Photo de Lin
├── marvin.png  # Photo de Marvin
└── rami.png    # Photo de Rami
```

### Code Source
```
src/
├── data/
│   └── teamData.ts     # Données centralisées de l'équipe
└── components/
    └── Team.tsx        # Composant d'affichage de l'équipe
```

## 🎨 Fonctionnalités

### Interface Enrichie
- **Photos personnalisées** pour chaque membre
- **Biographies détaillées** avec lore immersif
- **Statistiques réelles** de performance
- **Badges d'achievements** avec trophées
- **Fallback intelligent** vers initiales si image manquante

### Responsive Design
- **Grille adaptative** : 3 colonnes → 2 colonnes → 1 colonne
- **Cartes extensibles** : Min 450px de hauteur sur desktop
- **Optimisation mobile** : Padding et tailles ajustés

### Effets Visuels
- **Hover animations** : Translation et effets lumineux
- **Gradient borders** : Bordures dynamiques au survol
- **Smooth transitions** : 0.3s ease sur tous les éléments
- **Achievement badges** : Effet de scale au hover

## 🔧 Personnalisation

### Ajouter un nouveau membre
1. Ajouter la photo dans `/public/assets/`
2. Ajouter les données dans `teamData.ts`
3. Le composant se met à jour automatiquement

### Modifier les styles
- **Variables CSS** dans `App.css` pour cohérence
- **Classes modulaires** pour chaque élément
- **Media queries** pour responsive

Cette nouvelle structure offre une présentation professionnelle et immersive de l'équipe Timeless ! 🏆
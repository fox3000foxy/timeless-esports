# Structure des Composants - Timeless Esport

## 📁 Architecture des Composants

```
src/
├── components/
│   ├── index.ts         # Export groupé des composants
│   ├── Header.tsx       # Navigation fixe avec menu
│   ├── Hero.tsx         # Section d'accueil avec stats
│   ├── Team.tsx         # Présentation de l'équipe
│   ├── Tournaments.tsx  # Palmarès et succès
│   ├── News.tsx         # Actualités et annonces
│   ├── Contact.tsx      # Formulaire et liens sociaux
│   └── Footer.tsx       # Pied de page
├── App.tsx              # Composant principal (Single Page)
├── App.css              # Styles principaux
└── main.tsx             # Point d'entrée React
```

## 🔄 Fonctionnement de la Navigation

### Navigation par Scroll
- **Détection automatique** : La section active est détectée lors du scroll
- **Smooth scrolling** : Navigation fluide entre les sections
- **Header fixe** : Reste visible en permanence
- **Compensation** : `scroll-margin-top: 80px` pour compenser le header

### Navigation par Clic
- **Scroll vers section** : Clic sur un menu = scroll automatique
- **Mise à jour active** : L'état actif se met à jour automatiquement
- **Animation fluide** : `scroll-behavior: smooth` en CSS

## 🧩 Composants Détaillés

### Header.tsx
```typescript
interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}
```
- **Navigation dynamique** avec état actif
- **Scroll vers section** avec `scrollIntoView()`
- **Design responsive** avec logo Timeless

### Hero.tsx
- **Section d'accueil** plein écran
- **Statistiques dynamiques** de l'équipe
- **Effets visuels** avec animations CSS
- **ID : 'home'** pour la navigation

### Team.tsx
- **Grille responsive** des membres
- **Cartes avec hover effects**
- **Informations** : nom, rôle, jeu
- **ID : 'team'** pour la navigation

### Tournaments.tsx
- **Grille des achievements**
- **Icônes de trophées**
- **Informations** : titre, jeu
- **ID : 'tournaments'** pour la navigation

### News.tsx
- **Articles dynamiques**
- **Layout en grille**
- **Métadonnées** : titre, contenu, date
- **ID : 'news'** pour la navigation

### Contact.tsx
- **Formulaire de contact** fonctionnel
- **Validation HTML5**
- **Liens réseaux sociaux**
- **ID : 'contact'** pour la navigation

### Footer.tsx
- **Copyright** et informations légales
- **Design minimaliste**
- **Cohérent avec la charte graphique**

## 🎨 Styles et Responsivité

### Variables CSS Principales
```css
:root {
  --primary-red: #dc2626;
  --secondary-red: #ef4444;
  --primary-black: #0f0f0f;
  --secondary-black: #1a1a1a;
}
```

### Breakpoints Responsive
- **Mobile** : < 480px
- **Tablette** : 481px - 768px
- **Desktop** : > 768px

### Animations et Effets
- **Hover effects** sur tous les éléments interactifs
- **Transitions fluides** (0.3s ease)
- **Background effects** dans la section Hero
- **Parallax subtil** pour l'immersion

## 🚀 Avantages de cette Architecture

### ✅ **Maintenabilité**
- **Composants isolés** = modifications ciblées
- **Responsabilités séparées** = code plus clair
- **Réutilisabilité** des composants

### ✅ **Performance**
- **Lazy loading** potentiel par composant
- **Tree shaking** optimisé
- **Bundle splitting** plus efficace

### ✅ **Développement**
- **Hot reload** par composant
- **Debugging** plus facile
- **Tests unitaires** simplifiés

### ✅ **Expérience Utilisateur**
- **Navigation fluide** single-page
- **Chargement rapide** = pas de recharge
- **Scroll natural** avec détection automatique

## 🔧 Personnalisation Facile

### Ajouter une nouvelle section
1. Créer le composant dans `/components/`
2. L'ajouter à `index.ts`
3. L'importer dans `App.tsx`
4. Ajouter l'ID de section dans le script de détection
5. Ajouter l'item au menu dans `Header.tsx`

### Modifier le contenu
- **Données** : Directement dans chaque composant
- **Styles** : Variables CSS pour cohérence globale
- **Responsive** : Media queries existantes

Cette architecture offre un équilibre parfait entre **simplicité d'utilisation** et **facilité de maintenance** ! 🎮
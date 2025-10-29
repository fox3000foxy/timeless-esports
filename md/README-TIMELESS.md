# Timeless Esport - Site Web Officiel

Site web moderne et responsive pour l'équipe d'esport **Timeless Esport**, développé avec React, TypeScript et Vite.

## 🎮 À propos

Timeless Esport est une équipe d'esport compétitive spécialisée dans plusieurs jeux :
- **Valorant**
- **League of Legends** 
- **Counter-Strike 2**
- **Rocket League**

## 🚀 Technologies utilisées

- **React 18** - Bibliothèque UI moderne
- **TypeScript** - Typage statique pour un code plus robuste
- **Vite** - Build tool rapide et moderne
- **CSS3** - Animations et design responsive
- **ESLint** - Linting du code

## 🎨 Design

Le site utilise une palette de couleurs inspirée du logo officiel :
- **Rouge principal** : `#dc2626`
- **Rouge secondaire** : `#ef4444`
- **Noir principal** : `#0f0f0f`
- **Noir secondaire** : `#1a1a1a`

### Fonctionnalités

✅ **Design responsive** - Compatible mobile, tablette et desktop  
✅ **Navigation fluide** - Interface utilisateur intuitive  
✅ **Sections complètes** :
- Page d'accueil avec statistiques
- Présentation de l'équipe
- Palmarès et tournois
- Actualités
- Contact et recrutement

✅ **Animations modernes** - Effets visuels et transitions  
✅ **Performance optimisée** - Chargement rapide  

## 🛠️ Installation et développement

### Prérequis
- Node.js 18+
- npm ou yarn

### Installation
```bash
# Cloner le projet
git clone [repository-url]
cd timeless-esports-v2

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

### Scripts disponibles
```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run preview  # Prévisualisation du build
npm run lint     # Vérification du code
```

## 📁 Structure du projet

```
src/
├── assets/          # Images, logos, icônes
├── App.tsx          # Composant principal
├── App.css          # Styles principaux
├── index.css        # Styles globaux
└── main.tsx         # Point d'entrée React
```

## 🎯 Sections du site

### 1. **Accueil (Hero)**
- Logo et branding Timeless Esport
- Statistiques de l'équipe
- Effets visuels animés

### 2. **Équipe**
- Présentation des joueurs
- Rôles et spécialisations
- Jeux principaux

### 3. **Tournois**
- Palmarès et victoires
- Tournois majeurs
- Achievements

### 4. **Actualités**
- News de l'équipe
- Annonces importantes
- Mises à jour

### 5. **Contact**
- Formulaire de contact
- Liens réseaux sociaux
- Informations de recrutement

## 🔧 Personnalisation

### Ajout du logo
Remplacez le placeholder dans `/src/assets/` par votre logo officiel au format PNG ou SVG.

### Modification des couleurs
Les couleurs principales sont définies dans `/src/App.css` via des variables CSS :
```css
:root {
  --primary-red: #dc2626;
  --secondary-red: #ef4444;
  --primary-black: #0f0f0f;
  --secondary-black: #1a1a1a;
}
```

### Contenu
Modifiez le contenu dans `/src/App.tsx` :
- Informations de l'équipe
- Statistiques
- Actualités
- Liens de contact

## 📱 Responsive Design

Le site est entièrement responsive avec des breakpoints optimisés :
- **Mobile** : < 480px
- **Tablette** : 481px - 768px  
- **Desktop** : > 768px

## 🚀 Déploiement

### Build de production
```bash
npm run build
```

Les fichiers optimisés seront générés dans le dossier `dist/`.

### Hébergement recommandé
- **Netlify** - Déploiement automatique via Git
- **Vercel** - Optimisé pour React
- **GitHub Pages** - Gratuit pour projets publics

## 📄 Licence

© 2024 Timeless Esport. Tous droits réservés.

---

**Développé avec ❤️ pour la communauté esport**
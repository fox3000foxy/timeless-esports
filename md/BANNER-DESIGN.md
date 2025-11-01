# Design Team en Bannières - Timeless

## 🎨 Nouveau Concept : Bannières Interactives

### ✨ **Vue d'ensemble**
Transformation de la section Team en **5 bannières horizontales** élégantes avec des **cartes détaillées** qui apparaissent au hover, sur un **arrière-plan à motifs** rouge et noir.

### 🏗️ **Structure du Design**

#### 📱 **Bannières Principales**
```
┌─────────────────────────────────────────────────────┐
│ [👤 Avatar] NOM DU JOUEUR                          │
│             Rôle Spécialisé                       │
│             Jeu Principal              [Hover...] │
└─────────────────────────────────────────────────────┘
```

#### 🎯 **Carte Détaillée (Hover)**
```
┌─────────────────────────┐
│ [👤] NOM               │
│      Rôle & Jeu        │
├─────────────────────────┤
│ Bio immersive du joueur │
│                         │
│ ┌─ Statistiques ────┐  │
│ │ K/D, Rank, etc.   │  │
│ └───────────────────┘  │
│                         │
│ 🏆 Achievement 1       │
│ 🏆 Achievement 2       │
└─────────────────────────┘
```

## 🎨 **Éléments Visuels**

### 🔥 **Arrière-plan à Motifs**
- **Motifs géométriques** rouge et noir en diagonal
- **Transparence subtile** (5% et 3% d'opacité)
- **Taille des motifs** : 60px x 60px
- **Effet de profondeur** avec double layer

### 🎭 **Animations & Transitions**

#### ⚡ **Effet Bannière**
- **Translation horizontale** : +10px vers la droite au hover
- **Bordure dynamique** : Passe de gris à rouge
- **Ombre portée** : Shadow rouge avec blur 30px
- **Sweep effect** : Bande lumineuse traverse la bannière

#### 🎪 **Carte Détaillée**
- **Apparition fluide** : opacity 0 → 1 + translateY(-10px)
- **Positionnement** : Centre de la bannière + 130px vers le bas
- **Ombre dramatique** : Box-shadow noir intense
- **Z-index élevé** : Apparaît au-dessus de tout

### 📏 **Dimensions & Espacements**

#### 🎯 **Bannières**
- **Hauteur** : 120px (desktop), 100px (tablet), 90px (mobile)
- **Espacement** : 1.5rem entre les bannières
- **Padding interne** : 2rem (desktop) → 1rem (mobile)

#### 👤 **Avatars**
- **Bannière** : 80px → 60px → 50px (responsive)
- **Carte détaillée** : 60px → 50px → 45px (responsive)
- **Bordure** : 3px (bannière) / 2px (carte détaillée)

#### 📱 **Carte Détaillée**
- **Largeur** : 400px → 350px → 300px (responsive)
- **Padding** : 2rem → 1.5rem → 1rem (responsive)
- **Border-radius** : 16px pour cohérence

## 🎮 **Expérience Utilisateur**

### 🎯 **Interaction Flow**
1. **Vue d'ensemble** : 5 bannières alignées verticalement
2. **Hover effect** : Bannière se déplace + indication visuelle
3. **Carte détaillée** : Apparition fluide avec toutes les infos
4. **Navigation intuitive** : Passage facile d'un membre à l'autre

### 📱 **Responsive Behavior**
- **Desktop** : Toutes les fonctionnalités activées
- **Tablet** : Bannières plus compactes, cartes adaptées
- **Mobile** : Optimisation tactile, tailles réduites

### ⚡ **Performance**
- **CSS pur** : Pas de JavaScript lourd
- **GPU acceleration** : Transform properties pour fluidité
- **Lazy loading** : Images avec fallback intelligent

## 🛠️ **Technical Stack**

### 🎨 **CSS Features**
```css
/* Motifs d'arrière-plan */
background: linear-gradient(45deg, patterns...);
background-size: 60px 60px;

/* Effets de hover */
transform: translateX(10px);
box-shadow: 0 8px 30px rgba(220, 38, 38, 0.3);

/* Animations fluides */
transition: all 0.4s ease;
```

### ⚛️ **React Components**
- **Structure modulaire** : Component + Data séparés
- **TypeScript** : Interfaces définies pour type safety
- **Error handling** : Fallback intelligent pour les images
- **Accessibility** : Alt tags et ARIA labels

## 🔧 **Personnalisation**

### 🎨 **Variables Modifiables**
```css
:root {
  --banner-height: 120px;
  --card-width: 400px;
  --hover-translate: 10px;
  --pattern-size: 60px;
  --pattern-opacity: 0.05;
}
```

### 📊 **Données Dynamiques**
- **teamData.ts** : Source centralisée
- **Images** : `/public/assets/*.png`
- **Fallback** : Initiales automatiques

Ce nouveau design offre une **expérience immersive et professionnelle** parfaitement adaptée à l'univers esport ! 🏆
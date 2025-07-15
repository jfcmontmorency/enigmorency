# Énigmorency - Site Eleventy

## 🚀 Déploiement sur GitHub Pages

### Configuration automatique

Ce projet est configuré pour se déployer automatiquement sur GitHub Pages via GitHub Actions.

### Étapes pour le déploiement :

1. **Créer le repository sur GitHub**
2. **Pousser le code sur la branche `main`**
3. **Activer GitHub Pages dans les paramètres du repository :**
   - Aller dans `Settings` > `Pages`
   - Source : `Deploy from a branch`
   - Branch : `gh-pages` / `/ (root)`

### Structure des branches :

- **`main`** : Code source (fichiers Eleventy, SCSS, etc.)
- **`gh-pages`** : Site généré automatiquement (contenu de `_site/`)

### Commandes de développement :

```bash
# Installation des dépendances
npm install

# Développement local
npm run dev

# Build de production
npm run build:production

# Build simple
npm run build
```

### URLs :

- **Développement :** `http://localhost:8084/enigmorency/`
- **Production :** `https://[username].github.io/enigmorency/`

## 📁 Structure du projet

```
src/
├── _includes/          # Templates Nunjucks
├── _data/             # Données globales
├── assets/
│   ├── scss/          # Fichiers SCSS
│   └── images/        # Images
└── *.md               # Pages de contenu

_site/                 # Site généré (ignoré par git)
```

## 🔧 Configuration

Le site utilise le préfixe `/enigmorency/` pour être compatible avec GitHub Pages.

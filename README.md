# Portfolio Samuel Verdavaine — BUT TC3

Portfolio académique numérique — BUT Techniques de Commercialisation, Parcours P3 Business Développement & Management de la Relation Client.

**Stack :** React · TypeScript · Vite · Tailwind CSS · Framer Motion  
**Déploiement :** Vercel + GitHub

---

## Démarrage rapide

### Prérequis
- Node.js 18+  
- npm 9+

### Installation

```bash
# Cloner le dépôt
git clone https://github.com/VOTRE_USERNAME/portfolio-samuel-verdavaine.git
cd portfolio-samuel-verdavaine/portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Le site est accessible sur `http://localhost:5173`

### Build production

```bash
npm run build
```

---

## Déploiement sur Vercel (recommandé)

### Méthode simple — Interface Vercel

1. Pusher le code sur GitHub
2. Aller sur [vercel.com](https://vercel.com) → "New Project"
3. Importer votre repo GitHub
4. **Root Directory** : `portfolio`
5. **Framework Preset** : Vite (détecté automatiquement)
6. Cliquer "Deploy" — c'est tout ✓

Chaque push sur `main` déclenche un nouveau déploiement automatiquement.

### Méthode CLI

```bash
npm install -g vercel
cd portfolio
vercel          # déploiement preview
vercel --prod   # déploiement production
```

---

## Structure du projet

```
portfolio/
├── public/
│   ├── favicon.svg                  # Favicon
│   └── cv-samuel-verdavaine.pdf     # ← AJOUTER LE CV ICI
│
├── src/
│   ├── data/                        # ← TOUT LE CONTENU EST ICI
│   │   ├── profile.ts               # Infos personnelles + contact
│   │   ├── competences.ts           # 5 blocs de compétences BUT
│   │   ├── projets.ts               # 7 SAÉ détaillées
│   │   ├── reflexif.ts              # Tableau réflexif
│   │   └── stage.ts                 # Stage (à compléter)
│   │
│   ├── sections/                    # Une section par partie du site
│   ├── components/                  # Composants réutilisables
│   ├── types/index.ts               # Types TypeScript
│   └── utils/animations.ts          # Animations Framer Motion
│
├── vercel.json                      # Config Vercel
└── vite.config.ts                   # Config Vite
```

---

## Comment modifier le contenu

### Informations personnelles
→ [`src/data/profile.ts`](src/data/profile.ts)

```ts
contact: {
  email: 'samuel.verdavaine@etudiant.univ-xxx.fr',  // ← modifier
  linkedin: 'https://linkedin.com/in/samuel-verdavaine',  // ← modifier
  github: 'https://github.com/samuel-verdavaine',  // ← modifier
}
```

### Projets et SAÉ
→ [`src/data/projets.ts`](src/data/projets.ts)  
Compléter tous les champs `TODO` avec le contenu réel.

### Compétences BUT (progression)
→ [`src/data/competences.ts`](src/data/competences.ts)  
Mettre à jour le champ `progression` (0-100) pour chaque compétence.

### Tableau réflexif
→ [`src/data/reflexif.ts`](src/data/reflexif.ts)  
Remplacer les `TODO` par le contenu réel après chaque SAÉ.

### Stage
→ [`src/data/stage.ts`](src/data/stage.ts)  
Compléter dès que la convention est signée.

---

## Ajouter des preuves / traces

1. Placer les fichiers dans `public/preuves/`
2. Dans `projets.ts`, mettre `fournie: true` et ajouter `url` :

```ts
{ type: 'document', libelle: 'Rapport SAÉ', fournie: true, url: '/preuves/rapport.pdf' }
```

## Ajouter le CV

Placer le fichier dans `public/cv-samuel-verdavaine.pdf`.  
Le bouton Télécharger CV pointe automatiquement vers ce chemin.

---

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production |
| `npm run preview` | Prévisualiser le build local |
| `npm run lint` | Vérifier le code |

---

## Checklist rendu BUT3

- [ ] Email, LinkedIn, GitHub mis à jour dans `profile.ts`
- [ ] CV ajouté dans `public/`
- [ ] SAÉ BUT1 complétées avec preuves
- [ ] SAÉ BUT2 complétées avec preuves
- [ ] SAÉ BUT3 complétées
- [ ] Tableau réflexif (5 compétences) complété
- [ ] Stage renseigné
- [ ] Site déployé sur Vercel

---

*Portfolio BUT TC3 — Samuel Verdavaine — 2025/2026*

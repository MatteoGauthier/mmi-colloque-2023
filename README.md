# MMI Colloque 2023

Ce projet utilise le framework [Astro](https://astro.build) qui permet la génération statique d'un site.

## Usage

### Requirements

- Node v17

### Installation

Clonage du repository et déplacement dans le répertoire

```bash
git clone https://github.com/MatteoGauthier/mmi-colloque-2023.git
cd mmi-colloque-2023
```

Installation des dépendances

```bash
npm install
```

### Développement

Pour démarrer le serveur de développement local, vous pouvez utiliser le script npm suivant :

```bash
npm run dev
```

Une fois cette commande executée vous pouvez accéder au site à l'adresse suivante : [http://localhost:3000](http://localhost:3000)

## Découverte de Astro

### Structure du projet

- `src/*` - La source de votre site.
  - `components/*` - Les composants réutilisables.
  - `layouts/*` - Les layouts de votre site.
  - `pages/*` - Les pages de votre site.
- `public/*` - Les élements statiques de votre site, qui ne seront pas compilés.
- `package.json` - Le fichier de configuration de votre projet avec Node.js (on y retrouve les scripts npm, les dépendances, etc.)
- `astro.config.mjs` - Le fichier de configuration de votre projet avec [Astro](https://docs.astro.build/en/guides/configuring-astro/).
- `tsconfig.json` - Le fichier de configuration de votre projet avec TypeScript (l'outil qui permet d'améliorer la qualité du code JavaScript).

### Création d'une page

Pour créer une page il vous suffit de créer un fichier `.astro` dans le dossier `src/pages/`. Dans ce fichier vous avez une syntax particulière à respecter. En voici un exemple :

```astro
---
// Votre code JavaScript

const person = "Eric Catellin"
---

<!-- Votre code HTML / CSS -->
<div>
  <h1>Ma nouvelle page</h1>

  <p>Bonjour, je m'appelle {person}.</p>
</div>
```

Vous pouvez très bien omettre la partie JavaScript et laisser uniquement la partie HTML / CSS, comme ceci :

```astro
<div>
  <h1>Ma nouvelle page</h1>

  <p>Bonjour, je m'appelle Eric Catellin.</p>
</div>
```

### Création d'un composant

Pour créer un composant il vous suffit de créer un fichier `.astro` dans le dossier `src/components/`. Avec ici aussi la même syntaxe que pour les pages.

> Pour exemple, nous allons créer un composant `UserInfo` qui affichera le nom et l'âge d'une personne.

```astro
---
// Votre code JavaScript

// On récupère les données passées en paramètre, en l'occurence la propriété "name" et "age"
const { name, age } = Astro.props
---

<!-- Votre code HTML / CSS -->
<div>
  <span>{name}</span>
  <span>{age} ans</span>
</div>
```

Lorsque vous souhaitez utiliser ce composant, vous pouvez l'importer dans une page ou un autre composant, comme ceci :

```astro
---
import UserInfo from "../components/UserInfo.astro"
---

<UserInfo name="Martine Bornerie" age="25" />
```

### Créaton d'un layout

Pour créer un layout il vous suffit de créer un fichier `.astro` dans le dossier `src/layouts/`. Avec ici aussi la même syntaxe propre à Astro.

> Pour exemple, nous allons créer un layout `MainLayout` qui affichera un footer sur toutes les pages qui l'utiliseront.

```astro
---
const { siteName } = Astro.props
---

<div>
  <main>
    <!-- Ici on affiche le contenu de la page -->
    <!-- On utilise la balise <slot /> pour afficher le contenu de la page -->
    <slot />
  </main>

  <footer>
    <p>Footer</p>
    <p>{siteName}</p>
  </footer>
</div>
```

Maintenant, pour l'utiliser il suffit de l'importer dans une page, comme ceci :

```astro
---
import MainLayout from "../layouts/MainLayout.astro"
---

<MainLayout siteName="MMI Colloque 2023">
  <h1>Page de contact</h1>

  <p>Contactez moi par mail</p>
</MainLayout>
```

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

## Workflow de contribution

Pour travailler à plusieurs en collaboration sur un projet, il est important de maitriser le workflow de contribution. Pour cela, nous allons utiliser le système de branches de Git ainsi que les Pull Requests sur Github.

### Les étapes de contribution à un projet

1. Récuperer le projet sur votre machine
2. Créer une nouvelle branche
3. Effectuer des modifications
4. Créer un commit avec vos modifications
5. Envoyez vos modifications vers le repository distant
6. Créer une pull request sur Github
7. Faire valider votre pull request par un autre contributeur
8. Merger votre pull request sur la branch principale

### 1. Récuperer le projet sur votre machine

Pour commencer à développer sur le projet, il faut que vous soyez sur la dernière version du repository git. Pour y parvenir vous pouvez utiliser la commande suivante :

```bash
# Cette commande récupere les modifications distantes
git pull origin master
```

### 2. Créer une nouvelle branche

Pour assurer une bonne organisation et une intégrité du travail de chacun il est fortement recommandé de créer une nouvelle branch à chaque fois que vous souhaitez ajouter une nouvelle fonctionnalité ou corriger un bug. Pour créer une nouvelle branche vous pouvez utiliser une des deux commandes suivante :

```bash
# Cette commande crée une nouvelle branche et vous y déplace
git checkout -b <nom-de-votre-branche>
```

```bash
# Cette commande crée une nouvelle branche puis vous y déplace
git branch <nom-de-votre-branche>
git checkout <nom-de-votre-branche>
```

#### Bonne pratiques de nommage de branch

Une bonne pratique est de nommer votre branche en fonction de la modification que vous souhaitez apporter. Voici un exemple d'une bonne notation.

- Je souhaite développer une nouvelle fonctionnalité, alors je créer une branch `feat/contact-page`.
- Je souhaite corriger un bug sur le footer, alors je créer une branch `fix/footer-missing-contact`.
- Je souhaite améliorer une partie du code, alors je créer une branch `enhancement/extract-component`.

### 3. Effectuer des modifications

Une fois votre branche créer, vous pouvez commencer à effectuer des modifications sur le projet. À chaque fois que vous passez une étape, pensez à faire un commit avec vos modifications.

### 4. Créer un commit avec vos modifications

Avant de créer un commit verifier les fichiers le status des fichiers que vous venez de modifier, pour cela utiliser la commande suivante :

```bash
git status
```

Maintenant vous avez un apperçu des fichiers que vous avez modifié. Les fichiers en rouge sont ceux qui ne seront pas inclus dans votre commit, alors que les fichiers verts seront inclus dans votre commit. Pour passer un fichier du status rouge au status vert, vous pouvez utiliser la commande suivante :

```bash
git add <nom-du-fichier>
```

Pour gagner un peu de temps la commande `git add .` ajoute tous les fichiers de votre répertoire courant au commit.

Vous pouvez maintenant générer un commit à partir de vos modifications, pour cela utiliser la commande suivante :

```bash
git commit -m "<message-de-votre-commit>"
```

> Il est important d'avoir un message de commit clair et précis sur vos modifications.

Vous pouvez maintenant vérifier le bon déroulement de la commande en verifiant l'historique de votre repository local avec la commande ci dessous :

```bash
git log
```

> Pour une version plus simple et lisibile de l'historique de votre repository, vous pouvez utiliser la commande `git log --oneline`.

### 5. Envoyez vos modifications vers le repository distant

Rien de plus simple, il vous suffit d'utiliser la commande suivante :

```bash
git push origin <nom-de-votre-branche>
```

### 6. Créer une pull request sur Github

Rendez vous sur repository Github, puis cliquez sur l'onglet `Pull requests` puis sur le bouton `New pull request`.

Choissisez la branch à comparer avec la branch principale, puis cliquez sur le bouton `Create pull request`. (en l'occurence votre branche et la branch `master`)

> Il peut être pertinent d'avoir un nom de pull request explicite afin que vos collabrateurs puissent comprendre rapidement le but de votre pull request.

### 7. Faire valider votre pull request par un autre contributeur

En fonction du sérieux de votre projet, il est possible que vous ayez besoin de faire valider votre pull request par un autre contributeur. Pour cela, vous pouvez ajouter un ou plusieurs contributeurs en tant que `reviewer` de votre pull request.

Cela est fortement recommander car cela permet de vérifier le contenu ajouter à la branch principale. La personne chargé de cette review (validation) devra vérifier plusieurs points :

- La qualité du code
- La cohérence des modifications

### 8. Merger votre pull request sur la branch principale

Une fois que votre pull request a été validé, vous pouvez merger votre pull request sur la branch principale. Pour cela, il vous suffit de cliquer sur le bouton `Square and merge` puis sur le bouton `Confirm merge`.

## Crédits

- [Astro](https://astro.build/)

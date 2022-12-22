### Instruction

Projet NodeJS dont le but est de permettre une évaluation de vos capacités à développer sur cet environnement.
Une fois le projet téléchargé et installé vous aurez une heure pour effectuer deux principales tâches :

- [x] Concevoir un module, requester dont l'utilisation est faite dans le fichier `src/repository/repository.ts`. Ce module devra permettre d'effectuer des requêtes à une api rest ici fournit par le module json-server.
- [x] Corriger les erreurs détectables par les scripts d'analyse statique du code.

À l'issue du temps impartie vous me ferez une pull request depuis une branche intitulé suivant le partern suivant: `test/{votre_nom}_{votre_prenom}`.

### Installation

1. Commence par cloner le dépôt sur votre environnement local

```Shell
$ git clone git@github.com:pwdllx/test-nodejs.git
```

2. Utilise le gestionnaire de paquet ([npm](https://www.npmjs.com/)) pour installer toutes les dépendances requises

```Shell
$ cd test-nodejs && npm ci
```

### Lancement

Pour lancer le projet sur ton environnement local utilise la commande

```Shell
$ npm run dev
```

**Note**: Il te faudra créer un fichier `.env` et le renseigner en te basant sur l'exemple `.env.example`

Pour te facilité l'inspection du code pendant son exécution, tu peux te connecter au port `9229` avec tes [outils](https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients) habituels.
Tu peux maintenant te rendre à l'adresse http://localhost:3000/.

Voilà vous avez tous les outils et instructions nécessaires pour vous lancez 😎

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

### Construction de la Classe Requester

J'ai élaboré la classe Requester pour simplifier et centraliser la gestion des requêtes HTTP dans cette application. Cette classe agit comme une abstraction autour de l'API Fetch native de JavaScript, offrant une interface plus conviviale pour interagir avec les points d'extrémité de notre API REST.

La classe Requester prend en charge les principales méthodes HTTP telles que GET, POST, PUT, DELETE, etc., offrant ainsi une flexibilité totale pour communiquer avec notre serveur. Elle gère également les réponses de manière robuste, en vérifiant le statut de la réponse et en renvoyant les données ou en générant des erreurs appropriées en fonction de la situation.

## Choix de l'API Fetch Native

Mon choix d'utiliser l'API Fetch native de JavaScript au lieu de bibliothèques tierces telles que node-fetch, axios, ou https découle de plusieurs considérations :

**Standardisation** : L'API Fetch est une norme moderne et standardisée dans le monde JavaScript, largement supportée par les navigateurs et intégrée dans l'écosystème JavaScript. En optant pour une solution standard, nous favorisons la cohérence et la simplicité dans notre code.

**Légèreté** : L'API Fetch est légère et minimaliste. Elle offre une syntaxe claire et concise pour effectuer des requêtes HTTP sans ajouter de surcharge inutile. Cela permet de maintenir notre code source propre et facilement compréhensible.

**Intégration Transparente** : Étant donné que l'API Fetch est native à JavaScript, son utilisation s'intègre de manière transparente avec les autres fonctionnalités et outils du langage. Cela facilite la gestion des promesses, l'utilisation d'async/await, et la manipulation des données renvoyées.

**Compatibilité avec les Environnements** : L'API Fetch est compatible tant avec les navigateurs côté client que dans les environnements Node.js côté serveur. Cela nous permet d'utiliser la même implémentation pour les requêtes HTTP, quels que soient le côté du client ou du serveur.

Bien que des bibliothèques tierces offrent souvent des fonctionnalités avancées, j'ai décidé de privilégier la simplicité, la légèreté et la compatibilité native avec l'écosystème JavaScript. Cela contribue à une base de code plus claire, plus facile à entretenir, et alignée sur les standards de l'industrie.

## Qualité du code

Formatage du code avec prettier : npx prettier --write .

Uniformisation du code avec Eslint : npm run analysis:lint:eslint -- --fix

Lancement de l'analyse globale : npm run analysis

Utilisation de jest pour un test de la classe requester en mock.

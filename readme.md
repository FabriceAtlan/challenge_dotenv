# Challenge

## Objectif

Crée une petite application **Node.js** qui va juste afficher ce message : `I am <name>, wilder in <city>, and I love <language>.`

Les valeurs `<name>`, `<city>` et `<language>` doivent être remplacées par celles des **variables d'environnement** **MY_NAME**, **MY_CITY** et **MY_LANGUAGE**.

Ces variables doivent être chargées depuis un fichier `.env` via le paquet **dotenv**.

Afin de ne pas le partager, écris un "modèle" `.env.sample` : il doit indiquer les différentes paires clé-valeur à saisir dans le `.env` avec des valeurs fictives.

Cela permettra à un développeur utilisant ton application de recréer un fichier `.env` avec les bonnes valeurs.

## Données attendues

Partage ta solution sur un dépôt **GitHub** contenant :

- Le code **JavaScript**
- Le contenu du fichier **.env.sample**.
- Le contenu du fichier **.gitignore**.

## Critères de validation

- L'application **NodeJS** utilise **dotenv** pour charger les **variables d'environnement**.
- Les valeurs correctes sont affichées dans la **console** par le programme.
- Le fichier `.env.sample` fournit un exemple de ce à quoi le fichier .env devrait ressembler.

## Explication

1. Clonez le dépôt.
2. Installez les dépendances avec la commande suivante :

```javascript
npm install
```

2. Copiez le fichier `.env.sample`.
3. Renommez la copie en `.env`.
4. Remplacez les valeurs par votre nom, votre ville et votre language.
5. Lancez le programme avec la commande suivante :

```javascript
node challenge_dotenv.js
```

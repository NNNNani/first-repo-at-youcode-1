# 🎓 SAS Progress Console

Application console développée en **JavaScript avec Node.js** pour gérer les apprenants, leurs résultats quotidiens et suivre leur progression pendant les 7 jours de la SAS.

---

## 🎯 Objectif du projet

SAS Progress Console permet de :

* 👨‍🎓 Gérer les apprenants
* 📝 Enregistrer et modifier les résultats quotidiens
* 📊 Calculer la progression de chaque apprenant
* 🏆 Déterminer son niveau de progression
* 🔎 Rechercher un apprenant par nom ou par identifiant
* 📈 Filtrer et trier les apprenants
* 📋 Afficher un tableau de bord pédagogique
* ⚠️ Valider les données saisies et gérer les erreurs

---

## 🧭 Fonctionnalités

| Option | Fonction                                             |
| ------ | ---------------------------------------------------- |
| 1      | 📊 Afficher le tableau de bord                       |
| 2      | 👥 Afficher la liste des apprenants                  |
| 3      | ➕ Ajouter un apprenant                              |
| 4      | 🔍 Consulter un apprenant par identifiant            |
| 5      | 📝 Ajouter ou modifier un résultat quotidien         |
| 6      | 🔎 Rechercher un apprenant par nom                   |
| 7      | 🏆 Filtrer les apprenants par niveau                 |
| 8      | 📈 Trier les apprenants par progression décroissante |
| 9      | 🔤 Trier les apprenants par ordre alphabétique       |
| 0      | 🚪 Quitter l'application                             |

---

## 🏆 Niveaux de progression

Le niveau d'un apprenant est déterminé à partir de son pourcentage de progression.

| Progression | Niveau            |
| ----------- | ----------------- |
| ≥ 80 %      | 🟢 Solide         |
| 50 % – 79 % | 🟡 En progression |
| < 50 %      | 🔴 À renforcer    |

---

## 📊 Calcul de la progression

La progression globale est calculée à partir de tous les résultats enregistrés pour un apprenant.

### Formule

```text
Progression = (Total des exercices terminés / Total des exercices proposés) × 100
```

Les résultats des différentes journées sont additionnés avant de calculer le pourcentage final.

---

## 👨‍🎓 Structure des données

Chaque apprenant possède :

* un identifiant `id`
* un nom complet `nomComplet`
* une ville `ville`
* un tableau `resultats`

Chaque résultat contient :

* `jour`
* `exercicesTermines`
* `totalExercices`
* `challengeTermine`

Exemple :

```js
{
    id: 1,
    nomComplet: "Sara Dev",
    ville: "Nador",
    resultats: [
        {
            jour: 1,
            exercicesTermines: 18,
            totalExercices: 20,
            challengeTermine: true
        }
    ]
}
```

---

## 🔎 Recherche, filtre et tri

L'application permet plusieurs opérations sur les apprenants.

### Recherche

La recherche par nom utilise une fonction de normalisation pour gérer :

* les espaces supplémentaires
* les majuscules et minuscules

La recherche utilise également `includes()` pour permettre de rechercher une partie du nom.

### Filtrage

Les apprenants peuvent être filtrés selon leur niveau :

* Solide
* En progression
* À renforcer

### Tri par progression

Les apprenants peuvent être classés selon leur progression, du pourcentage le plus élevé au plus faible.

### Tri alphabétique

Les apprenants peuvent également être classés par ordre alphabétique selon leur nom.

---

## 📋 Tableau de bord

Le tableau de bord affiche :

* 👥 le nombre total d'apprenants
* 📊 la moyenne de progression
* 🟢 le nombre d'apprenants `Solide`
* 🟡 le nombre d'apprenants `En progression`
* 🔴 le nombre d'apprenants `À renforcer`
* 📈 la liste des apprenants triés par progression
* 📅 les journées manquantes
* 🏆 les challenges non terminés

---

## ⚠️ Validation des données

Avant d'enregistrer un résultat, l'application vérifie notamment :

* que le jour est compris entre `1` et `7`
* que le nombre d'exercices terminés ne dépasse pas le nombre total d'exercices
* que `challengeTermine` est une valeur booléenne

Les données invalides ne sont pas enregistrées.

---

## 🛠️ Technologies utilisées

* **JavaScript**
* **Node.js**
* Module **readline** pour les interactions avec l'utilisateur dans la console

Aucune bibliothèque externe n'est nécessaire.

---

## 📁 Structure du projet

```text
projet-final/
├── index.js
└── README.md
```

### `index.js`

Contient toute la logique de l'application :

* Données
* Nettoyage et validation
* Gestion des apprenants
* Gestion des résultats
* Calcul de progression
* Recherche, filtre et tri
* Tableau de bord
* Menu interactif
* Tests

### `README.md`

Contient la documentation et les explications du projet.

---

## 🚀 Installation et lancement

### Prérequis

Il faut avoir **Node.js** installé sur la machine.

Pour vérifier l'installation :

```bash
node --version
```

### Lancer le projet

Se placer dans le dossier `projet-final`, puis exécuter :

```bash
node index.js
```

Le menu interactif s'affiche ensuite dans la console.

---

## 🎓 Notions JavaScript mises en pratique

Ce projet regroupe plusieurs notions étudiées pendant la SAS :

* Variables et types
* Opérateurs
* Conditions `if / else`
* Boucles `for`
* Fonctions
* Paramètres et `return`
* Chaînes de caractères
* Tableaux
* Objets
* Méthodes de tableaux
* Recherche
* Filtrage
* Tri
* Validation des données
* Interaction avec l'utilisateur
* Organisation d'un programme en plusieurs parties

---
## 👩‍💻 Objectif pédagogique

L'objectif est de mettre en pratique les différentes notions JavaScript étudiées pendant la SAS dans une seule application complète, organisée et interactive.

Le projet permet ainsi de passer de petits exercices indépendants à une application console regroupant plusieurs fonctionnalités.

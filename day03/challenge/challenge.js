/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · CHALLENGE
 * LE GESTIONNAIRE D'INVENTAIRE DE L'AVENTURIER
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer l'inventaire (sac à dos) d'un héros dans un jeu vidéo, en utilisant uniquement des fonctions pour manipuler la "mémoire" globale.
 *
 * Consignes :
 * 1. Déclarez une variable globale (hors des fonctions) or = 0.
 * 2. Créez une fonction ajouterOr(montant) qui ajoute à la bourse et affiche "Vous avez ramassé [montant] or. Total: [or]".
 * 3. Créez une fonction depenserOr(montant) qui vérifie si le héros a assez d'or. Si oui, déduit l'or et affiche l'achat. Sinon, affiche "Fonds insuffisants".
 * 4. Créez une fonction combatGagne() qui appelle ajouterOr avec un montant aléatoire entre 10 et 50.
 * 5. Simulez une aventure : gagnez 3 combats, puis tentez d'acheter une épée à 100 or.
 * Bonus : Utilisez des closures pour éviter d'avoir or en variable globale vulnérable !
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day03/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

// Étape 1 : Déclarer une variable globale "or" et lui donner la valeur 0

// Étape 2 : Créer la fonction ajouterOr(montant)
// Ajouter "montant" à la variable "or"
// Afficher : "Vous avez ramassé [montant] or. Total: [or]"

// Étape 3 : Créer la fonction depenserOr(montant)
// Vérifier si le héros possède suffisamment d'or
// Si oui : retirer "montant" de "or"
// Afficher que l'achat a été effectué
// Sinon : afficher "Fonds insuffisants"

// Étape 4 : Créer la fonction combatGagne()
// Générer un nombre aléatoire entre 10 et 50
// Ajouter ce nombre à l'or grâce à la fonction ajouterOr()

// Étape 5 : Simuler trois combats gagnés
// Appeler combatGagne() trois fois

// Étape 6 : Essayer d'acheter une épée qui coûte 100 or
// Appeler depenserOr(100)


let or = 0;

function ajouterOr(montant) {

    or += montant;

    console.log(`Vous avez ramassé ${montant} or. Total: ${or}`);
}

function depenserOr(montant) {

    if (or >= montant) {

        or -= montant;

        console.log(`Achat effectué. Total: ${or}`);

    } else {

        console.log("Fonds insuffisants");

    }
}

function combatGagne() {

    let gain = Math.floor(Math.random() * 41) + 10;

    ajouterOr(gain);
}

combatGagne();
combatGagne();
combatGagne();

depenserOr(100);

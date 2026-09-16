/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · CHALLENGE
 * LE POKEDEX (ANNUAIRE DE DONNÉES)
 * ─────────────────────────────────────────────────────────────
 *
 * 🏆 MISSION
 * Contexte : Vous devez gérer une mini-base de données d'utilisateurs.
 *
 * Consignes :
 * 1. Vous avez un tableau utilisateurs = [].
 * 2. Créez une fonction ajouterUtilisateur(nom, email) qui crée un objet { id, nom, email } (générez un ID unique simple)
 *  et l'ajoute au tableau.
 * 3. Créez une fonction trouverParEmail(email) qui retourne l'objet utilisateur correspondant.
 * 4. Créez une fonction supprimerParId(id) qui supprime l'utilisateur du tableau.
 * 5. Créez une fonction afficherAnnuaire() qui affiche joliment la liste complète dans la console.
 *
 * 📖 Consigne détaillée : ./README.md
 * ▶️ Commande : node day06/challenge/challenge.js
 */
'use strict';

// Découpe d'abord le problème en petites étapes.
// TODO: écris ta solution ici.

let utilisateur = [];

function ajouterUtilisateur(nom, email) {
    let id = utilisateur.length + 1;

    let user = {
        id: id,
        nom: nom,
        email: email
    };

    utilisateur.push(user);
}

function trouverParEmail(email) {
    for (let i = 0; i < utilisateur.length; i++) {
        if (utilisateur[i].email === email) {
            return utilisateur[i];
        }
    }
}
function supprimerParId(id) {
    for (let i = 0; i < utilisateur.length; i++) {
        if (utilisateur[i].id === id) {
            utilisateur.splice(i, 1);
            return;
        }
    }

}
function afficherAnnuaire() {
    for (let i = 0; i < utilisateur.length; i++) {

        let user = utilisateur[i];

        console.log("ID:", user.id);
        console.log("Nom:", user.nom);
        console.log("Email:", user.email);
        console.log("----------------");
    }
}

ajouterUtilisateur("Sara", "sara@gmail.com");
ajouterUtilisateur("Ali", "ali@gmail.com");
ajouterUtilisateur("Salma", "salma@gmail.com");

console.log("=== Annuaire initial ===");
afficherAnnuaire();

console.log("=== Recherche par email ===");
console.log(trouverParEmail("ali@gmail.com"));

console.log("=== Suppression de l'utilisateur ID 2 ===");
supprimerParId(2);

console.log("=== Annuaire après suppression ===");
afficherAnnuaire();

// === Annuaire initial ===
// ID: 1
// Nom: Sara
// Email: sara@gmail.com
//----------------
// ID: 2
// Nom: Ali
// Email: ali@gmail.com
//----------------
// ID: 3
// Nom: Salma
// Email: salma@gmail.com
//----------------
// === Recherche par email ===
// { id: 2, nom: 'Ali', email: 'ali@gmail.com' }
// === Suppression de l'utilisateur ID 2 ===
// === Annuaire après suppression ===
// ID: 1
// Nom: Sara
// Email: sara@gmail.com
// ----------------
// ID: 3
// Nom: Salma
/// Email: salma@gmail.com
//----------------


/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 02 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * MISE À JOUR
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Changez l'âge de l'utilisateur précédent pour l'augmenter de 1, et ajoutez-lui une propriété email.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-02
 * ▶️ Commande : node day06/exercices/exercice-02.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let utilisateur ={
    nom : "karima" ,
    age : 20 ,
    estAdmin : true
};
utilisateur.age =21;
utilisateur.email = "karima@gmail.com";

 // console.log(utilisateur);  { nom: 'karima', age: 21, estAdmin: true, email: 'karima@gmail.com' }
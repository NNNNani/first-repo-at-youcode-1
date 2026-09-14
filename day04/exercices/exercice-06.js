/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 06 · NIVEAU 1 : FONDATIONS (DÉBUTANTS)
 * DÉCOUPAGE EN TABLEAU
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Transformez la chaîne "Safi,Youssoufia,Nador,Casablanca" en un véritable tableau de 4 éléments.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-06
 * ▶️ Commande : node day04/exercices/exercice-06.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let villes = "Safi,Youssoufia,Nador,Casablanca";

let tableau = villes.split(",");

console.log(tableau);
// ["Safi", "Youssoufia", "Nador", "Casablanca"]
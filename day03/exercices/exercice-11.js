/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 03 · EXERCICE 11 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FACTORIELLE ENCAPSULÉE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Convertissez votre logique de factorielle (Day 02) en une fonctionc calculerFacrorielle(n). 
 * Si n = 0, la fonction doit retourner .1
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-11
 * ▶️ Commande : node day03/exercices/exercice-11.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function calculerFacrorielle(n) {

    let factorial = 1;

    for (let i = n; i >= 1; i--) {

        factorial *= i;
    }
    return factorial;
}
console.log(calculerFacrorielle(0)); // 1
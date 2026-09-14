/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 14 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * COMPTAGE DE MOTS
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Comptez le nombre de mots dans une longue chaîne. *Attention aux espaces multiples !* (Un mot est généralement séparé par un espace).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-14
 * ▶️ Commande : node day04/exercices/exercice-14.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

function compterMots(phrase) {
    let mots = phrase.split(" ");

    mots = mots.filter(function (mot) {
        return mot !== "";
    });

    return mots.length;
}

console.log(compterMots("Bonjour    tout   le monde")); //4
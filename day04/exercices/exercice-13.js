/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 13 · NIVEAU 2 : CONSOLIDATION (INTERMÉDIAIRES)
 * FORMATAGE MONÉTAIRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction formater(montant) qui prend 1234567 (Number ou String) et retourne "1 234 567 MAD". 
 * (Vous pouvez chercher comment utiliser les regex pour insérer des espaces, ou utiliser les boucles/slice).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-13
 * ▶️ Commande : node day04/exercices/exercice-13.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function format(montant) {
    montant = String(montant);
    let resultat = "";

    while (montant.length > 3) {
        resultat = " " + montant.slice(-3) + resultat;
        montant = montant.slice(0, -3);
    }

    resultat = montant + resultat;

    return resultat + " MAD";
}

console.log(format(1234567)); // 1 234 567 MAD

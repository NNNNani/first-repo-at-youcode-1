/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 19 · NIVEAU 3 : DÉFI (AVANCÉS)
 * VALIDATEUR DE PLAQUE D'IMMATRICULATION (REGEX BASIQUE)
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Simulez la vérification d'une plaque d'immatriculation marocaine. Le format attendu est "1234-A-56" ou "12345-AB-6". Pour simplifier, vérifiez qu'elle contient deux tirets et qu'une des sections au milieu est une lettre. L'utilisation d'expressions régulières (Regex) est recommandée ici !
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-19
 * ▶️ Commande : node day04/exercices/exercice-19.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function verifierPlaque(plaque) {
    let parties = plaque.split("-");

    if (parties.length !== 3) {
        return false;
    }

    if (isNaN(parties[0])) {
        return false;
    }

    if (!isNaN(parties[1])) {
        return false;
    }

    if (isNaN(parties[2])) {
        return false;
    }

    return true;
}

console.log(verifierPlaque("1234-A-56"));   // true
console.log(verifierPlaque("12345-AB-6"));  // true
console.log(verifierPlaque("1234-56-78"));  // false 

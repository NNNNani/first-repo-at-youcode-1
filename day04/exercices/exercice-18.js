/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 04 · EXERCICE 18 · NIVEAU 3 : DÉFI (AVANCÉS)
 * COMPTEUR D'OCCURRENCES DE LETTRE
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez une fonction qui compte combien de fois la lettre "e" (minuscule ou majuscule) apparaît dans un long paragraphe.
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-18
 * ▶️ Commande : node day04/exercices/exercice-18.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.


function compterE(texte) {
    let compteur = 0;

    texte = texte.toLowerCase();

    for (let i = 0; i < texte.length; i++) {
        if (texte[i] === "e") {
            compteur++;
        }
    }

    return compteur;
}

console.log(compterE("Bonjour, cette phrase contient des E et des e."));// 9

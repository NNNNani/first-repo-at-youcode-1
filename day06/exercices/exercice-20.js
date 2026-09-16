/**
 * ─────────────────────────────────────────────────────────────
 * JOUR 06 · EXERCICE 20 · NIVEAU 3 : DÉFI (AVANCÉS)
 * DEEP COPY VS SHALLOW COPY
 * ─────────────────────────────────────────────────────────────
 *
 * 🎯 MISSION
 * Créez un objet contenant un autre objet imbriqué. Clonez-le avec le Spread operator (...). 
 * Montrez (avec console.log) que modifier l'objet imbriqué dans la copie modifie AUSSI l'original. 
 * Expliquez pourquoi en commentaire, et donnez la solution moderne (ex: structuredClone ou JSON parse/stringify).
 *
 * 📖 Consigne détaillée : ../03-exercices.md#exercice-20
 * ▶️ Commande : node day06/exercices/exercice-20.js
 */
'use strict';

// 1. Identifie les données nécessaires.
// 2. Écris ta solution sous cette ligne.
// TODO: écris ta solution ici.

let original = {
    name: " sara ",
    adress: {
        city: "rabat",
    }
};
let copieSpread = { ...original };
copieSpread.adress.city = "fes";
console.log(original);
console.log(copieSpread);

//  { name: ' sara ', adress: { city: 'fes' } }
//  { name: ' sara ', adress: { city: 'fes' } }

// Le Spread crée une copie superficielle (shallow copy). 
// Il copie seulement l'objet extérieur, mais pas l'objet imbriqué. 
// L'objet "adress" reste le même dans original et copieSpread. 
// Donc, si on modifie copieSpread.adress.city, original.adress.city est aussi modifié. 
// C'est parce que original.adress et copieSpread.adress référencent le même objet.

// Alors, maintenant je cherche une solution moderne pour éviter ce problème,
// et je trouve la méthode structuredClone().

let copieDeep = structuredClone(original);
//copieDeep.adress.city = "fes";
//console .log ( original);
//console.log( copieDeep );
//  { name: ' sara ', adress: { city: 'rabat' } }
//  { name: ' sara ', adress: { city: 'fes' } }
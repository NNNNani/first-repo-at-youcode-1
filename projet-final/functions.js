// ==================================================
// Explication des fonctions 
// ==================================================

// Vérifier si les données d'un résultat sont valides avant de les enregistrer.
// La fonction contrôle les informations de la journée, les exercices terminés
// et l'état du challenge, puis retourne "valide" ou "invalide".
function validerResultat(resultat) {

    if (resultat.jour < 1 || resultat.jour > 7) {

        return "invalide";
    }

    if (resultat.exercicesTermines > resultat.totalExercices) {

        return "invalide";
    }

    if (typeof (resultat.challengeTermine) !== "boolean") {

        return "invalide"
    }

    return "valide";
}

// =================================================================================

// Rechercher un apprenant à partir de son ID.
// La fonction parcourt le tableau des apprenants et retourne l'apprenant correspondant à l'ID recherché.
//  Si aucun apprenant n'est trouvé, la fonction retourne undefined.
function rechercherApprenant(id) {

    for (let i = 0; i < apprenants.length; i++) {

        if (apprenants[i].id === id) {

            return apprenants[i];
        }
    }
}

//====================================================================================

// Cette fonction permet d'enregistrer un résultat pour un apprenant.
// Elle vérifie d'abord que l'apprenant existe et que le résultat est valide.
// Ensuite, elle vérifie si un résultat existe déjà pour le même jour.
// Si le jour existe, le résultat est modifié.
// Sinon, le nouveau résultat est ajouté.
function enregistrerResultat(id, resultat) {

    // Rechercher l'apprenant à partir de son ID.
    let apprenant = rechercherApprenant(id);

    // Vérifier si les données du résultat sont valides.
    let validation = validerResultat(resultat);

    // Vérifier si l'apprenant existe.
    // Si l'apprenant n'existe pas, arrêter la fonction.
    if (!apprenant) {

        return "apprenant introuvable";
    }

    // Vérifier si le résultat est invalide.
    // Si les données ne sont pas correctes, ne pas les enregistrer.
    if (validation === "invalide") {

        return "resultat invalide";
    }

    // Parcourir les résultats déjà enregistrés pour cet apprenant
    // afin de vérifier si le même jour existe déjà.
    for (let i = 0; i < apprenant.resultats.length; i++) {

        // Comparer le jour du résultat existant avec le jour du nouveau résultat.
        if (apprenant.resultats[i].jour === resultat.jour) {

            // Si le même jour existe, remplacer l'ancien résultat
            // par le nouveau résultat.
            apprenant.resultats[i] = resultat;

            // Indiquer que le résultat a été modifié.
            return "resultat modifié";
        }
    }

    // Si aucun résultat n'existe pour ce jour,
    // ajouter le nouveau résultat dans le tableau.
    apprenant.resultats.push(resultat);

    // Indiquer que le résultat a été ajouté.
    return "resultat ajouté";
}

//===================================================================================================================

function calculerProgression(id) {

    // Initialiser les compteurs à 0.
    // Ils vont servir à additionner les exercices terminés
    // et le nombre total d'exercices.
    let totalTermines = 0;
    let totalExercices = 0;


    // Rechercher l'apprenant correspondant à l'ID.
    let apprenant = rechercherApprenant(id);


    // Vérifier si l'apprenant existe.
    // S'il n'existe pas, arrêter la fonction.
    if (!apprenant) {

        return "apprenant introuvable";
    }


    // Parcourir tous les résultats de l'apprenant
    // pour additionner les exercices terminés
    // et les exercices proposés.
    for (let i = 0; i < apprenant.resultats.length; i++) {

        totalTermines =
            totalTermines + apprenant.resultats[i].exercicesTermines;

        totalExercices =
            totalExercices + apprenant.resultats[i].totalExercices;
    }


    // Calculer la progression globale après avoir
    // additionné les résultats de tous les jours.
    let pourcentage = (totalTermines / totalExercices) * 100;


    // Déterminer le niveau selon le pourcentage obtenu.
    if (pourcentage >= 80) {

        return {
            pourcentage: pourcentage,
            niveau: "solide"
        };

    } else if (pourcentage >= 50) {

        return {
            pourcentage: pourcentage,
            niveau: "en progression"
        };

    } else {

        return {
            pourcentage: pourcentage,
            niveau: "À renforcer"
        };
    }
}

//==============================================================================================================================

function filtrerParNiveau(niveau) {

    // Créer un tableau vide pour stocker les apprenants correspondants.
    let resultat = [];

    // Parcourir tous les apprenants.
    for (let i = 0; i < apprenants.length; i++) {

        // Calculer le niveau de l'apprenant actuel
        // puis le comparer avec le niveau demandé.
        if (calculerProgression(apprenants[i].id).niveau === niveau) {

            // Ajouter l'apprenant au tableau s'il correspond au niveau demandé.
            resultat.push(apprenants[i]);
        }
    }

    // Retourner la liste des apprenants filtrés.
    return resultat;
}

// =============================================================================================================================

function trierParProgression() {

    // sort() parcourt le tableau et compare deux apprenants à la fois.
    // Les deux apprenants sont reçus sous forme d'objets
    // dans apprenant1 et apprenant2.
    apprenants.sort(function(apprenant1, apprenant2) {

        // Récupérer l'ID du premier apprenant,
        // puis utiliser cet ID pour calculer sa progression.
        // La fonction calculerProgression retourne un objet
        // contenant le pourcentage et le niveau.
        let pourcentage1 =
            calculerProgression(apprenant1.id).pourcentage;

        // Faire la même chose pour le deuxième apprenant.
        let pourcentage2 =
            calculerProgression(apprenant2.id).pourcentage;

        // Indiquer à sort() comment comparer les deux apprenants.
        // On compare leurs pourcentages pour placer
        // la progression la plus élevée en premier.
        return pourcentage2 - pourcentage1;
    });

    // Retourner le tableau après le tri.
    return apprenants;
}
//==============================================================================================================

function afficherTableauDeBord(){

    // PARTIE 1 : Compter le nombre total des apprenants
    // apprenants.length donne le nombre d'apprenants dans le tableau
    let totalApprenants = apprenants.length;

    console.log("Total apprenants :", totalApprenants);


    // PARTIE 2 : Calculer la moyenne de progression
    // On commence par 0 car on va additionner les progressions
    let totalProgression = 0;

    // Parcourir tous les apprenants
    for (let i = 0; i < totalApprenants; i++){

        // Calculer la progression de l'apprenant actuel
        // et récupérer seulement son pourcentage
        totalProgression =
            totalProgression +
            calculerProgression(apprenants[i].id).pourcentage;
    }

    // Calculer la moyenne de progression de tous les apprenants
    let moyenneProgression =
        totalProgression / totalApprenants;

    console.log("Moyenne progression :", moyenneProgression);


    // PARTIE 3 : Compter les apprenants selon leur niveau
    // Chaque compteur commence à 0
    let nombreSolide = 0;
    let nombreEnProgression = 0;
    let nombreARenforcer = 0;

    // Parcourir tous les apprenants
    for (let i = 0; i < totalApprenants; i++){

        // Récupérer la progression et le niveau de l'apprenant
        let progression =
            calculerProgression(apprenants[i].id);

        // Si le niveau est "solide", augmenter le compteur
        if (progression.niveau === "solide"){
            nombreSolide++;

        // Sinon, si le niveau est "en progression"
        }else if (progression.niveau === "en progression"){
            nombreEnProgression++;

        // Sinon, l'apprenant est "À renforcer"
        }else{
            nombreARenforcer++;
        }
    }

    console.log("Solide :", nombreSolide);
    console.log("En progression :", nombreEnProgression);
    console.log("À renforcer :", nombreARenforcer);


    // PARTIE 4 : Trier les apprenants par progression décroissante
    // La fonction trierParProgression() retourne la liste triée
    let listeTriee = trierParProgression();

    // Parcourir la liste triée
    for (let i = 0; i < listeTriee.length; i++){

        // Calculer la progression de l'apprenant actuel
        let progress =
            calculerProgression(listeTriee[i].id);

        // Afficher son nom, son pourcentage et son niveau
        console.log(
            listeTriee[i].nomComplet,
            progress.pourcentage,
            progress.niveau
        );
    }


    // PARTIE 5 : Chercher les jours manquants et les challenges non terminés
    // Parcourir chaque apprenant
    for (let i = 0; i < totalApprenants; i++){

        let apprenant = apprenants[i];

        // Tableau pour stocker les jours sans résultat
        let joursManquants = [];

        // Tableau pour stocker les jours où le challenge n'est pas terminé
        let challengesManquants = [];


        // PARTIE 5-A : Chercher les jours manquants
        // On vérifie les 7 jours de la SAS
        for (let jour = 1; jour <= 7; jour++){

            // Au début, on considère que le jour n'existe pas
            let jourExiste = false;

            // Parcourir les résultats de l'apprenant
            for (let j = 0; j < apprenant.resultats.length; j++){

                let jourResultat =
                    apprenant.resultats[j].jour;

                // Vérifier si le jour recherché existe
                if (jour === jourResultat){
                    jourExiste = true;
                }
            }

            // Si le jour n'existe pas,
            // on l'ajoute dans les jours manquants
            if (jourExiste === false){
                joursManquants.push(jour);
            }
        }


        // PARTIE 5-B : Chercher les challenges non terminés
        // Parcourir les résultats de l'apprenant
        for (let j = 0; j < apprenant.resultats.length; j++){

            // Vérifier si le challenge n'est pas terminé
            if (apprenant.resultats[j].challengeTermine === false){

                // Ajouter le numéro du jour dans le tableau
                challengesManquants.push(
                    apprenant.resultats[j].jour
                );
            }
        }


        // Afficher le nom de l'apprenant,
        // ses jours manquants et ses challenges non terminés
        console.log(
            apprenant.nomComplet,
            joursManquants,
            challengesManquants
        );
    }
}

//===========================================================================================================================

//const readline permet d’importer le module readline de Node.js, qui permet de récupérer les saisies de l’utilisateur depuis la console.

const readline = require("readline");


// Créer une interface readline.
// input : permet de lire ce que l'utilisateur écrit au clavier.
// output : permet d'afficher les messages dans la console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


// Fonction principale du menu.
// Elle affiche les différentes fonctionnalités disponibles,
// demande à l'utilisateur de choisir une option,
// puis exécute l'action correspondant à son choix.
function afficherMenu() {

    console.log("\n================================");
    console.log("      SAS PROGRESS CONSOLE");
    console.log("================================");

    console.log("1. Afficher le tableau de bord");
    console.log("2. Afficher la liste des apprenants");
    console.log("3. Ajouter un apprenant");
    console.log("4. Consulter un apprenant par identifiant");
    console.log("5. Ajouter ou modifier le résultat d'une journée");
    console.log("6. Rechercher un apprenant par nom");
    console.log("7. Filtrer les apprenants par niveau");
    console.log("8. Trier les apprenants par progression décroissante");
    console.log("9. Trier les apprenants par ordre alphabétique");
    console.log("0. Quitter");

    // Demander à l'utilisateur de saisir le numéro de l'option choisie.
    // La valeur saisie est récupérée dans la variable "choix".
    rl.question("Votre choix : ", function (choix) {

        // Utiliser switch pour vérifier le choix de l'utilisateur.
        // Chaque case correspond à une option du menu.
        switch (choix) {

            // CASE 1 : Afficher le tableau de bord.
            // Cette option appelle la fonction afficherTableauDeBord()
            // qui affiche les statistiques générales des apprenants.
            case "1":

                afficherTableauDeBord();

                // Réafficher le menu après avoir terminé l'opération.
                afficherMenu();

                break;

            // CASE 2 : Afficher la liste des apprenants.
            // Cette option parcourt le tableau "apprenants"
            // et affiche les informations principales de chaque apprenant.
            case "2":

                // Parcourir tous les apprenants avec une boucle for.
                for (let i = 0; i < apprenants.length; i++) {

                    // Afficher l'ID, le nom et la ville de l'apprenant actuel.
                    console.log(
                        apprenants[i].id,
                        apprenants[i].nomComplet,
                        apprenants[i].ville
                    );
                }

                // Réafficher le menu après l'opération.
                afficherMenu();

                break;

            // CASE 3 : Ajouter un nouvel apprenant.
            // Cette option demande les informations de l'apprenant
            // puis crée un nouvel objet avant de l'ajouter au tableau.
            case "3":

                // Demander l'identifiant du nouvel apprenant.
                // La valeur saisie est récupérée dans "id".
                rl.question("Identifiant : ", function (id) {

                    // Demander le nom complet de l'apprenant.
                    // La valeur saisie est récupérée dans "nomComplet".
                    rl.question("Nom complet : ", function (nomComplet) {

                        // Demander la ville de l'apprenant.
                        // La valeur saisie est récupérée dans "ville".
                        rl.question("Ville : ", function (ville) {

                            // Créer un objet contenant les informations
                            // du nouvel apprenant.
                            let nouvelApprenant = {

                                // Convertir l'ID saisi en nombre.
                                id: Number(id),

                                // Enregistrer le nom complet.
                                nomComplet: nomComplet,

                                // Enregistrer la ville.
                                ville: ville,

                                // Créer un tableau vide pour ses résultats.
                                resultats: []
                            };

                            // Appeler la fonction ajouterApprenant()
                            // pour ajouter le nouvel apprenant au tableau.
                            let message =
                                ajouterApprenant(nouvelApprenant);

                            // Afficher le message retourné par la fonction.
                            console.log(message);

                            // Réafficher le menu après l'ajout.
                            afficherMenu();
                        });
                    });
                });

                break;

            // CASE 4 : Rechercher un apprenant par son identifiant.
            // Cette option demande un ID puis utilise la fonction
            // rechercherApprenant() pour trouver l'apprenant correspondant.
            case "4":

                // Demander l'identifiant de l'apprenant.
                rl.question(
                    "Identifiant de l'apprenant : ",
                    function (id) {

                        // Convertir l'ID en nombre.
                        // Puis rechercher l'apprenant correspondant.
                        let apprenant =
                            rechercherApprenant(Number(id));

                        // Vérifier si un apprenant a été trouvé.
                        if (apprenant) {

                            // Afficher l'apprenant trouvé.
                            console.log(
                                "Apprenant trouvé :",
                                apprenant
                            );

                        } else {

                            // Afficher un message si aucun apprenant
                            // ne correspond à l'ID recherché.
                            console.log(
                                "Apprenant introuvable"
                            );
                        }


                        // Réafficher le menu après la recherche.
                        afficherMenu();
                    }
                );

                break;

            // CASE 5 : Ajouter ou modifier le résultat d'une journée.
            // Cette option demande les informations d'un résultat,
            // puis utilise enregistrerResultat() pour l'ajouter ou le modifier.
            case "5":

                // Demander l'identifiant de l'apprenant.
                rl.question(
                    "Identifiant de l'apprenant : ",
                    function (id) {


                        // Rechercher l'apprenant à partir de son ID.
                        let apprenant =
                            rechercherApprenant(Number(id));


                        // Vérifier si l'apprenant existe.
                        if (!apprenant) {

                            // Afficher un message si l'apprenant n'existe pas.
                            console.log(
                                "Apprenant introuvable"
                            );

                            // Revenir au menu principal.
                            afficherMenu();

                            // Arrêter cette partie de la fonction.
                            return;
                        }

                        // Afficher le nom de l'apprenant trouvé.
                        console.log(
                            "Apprenant trouvé :",
                            apprenant.nomComplet
                        );

                        // Demander le numéro de la journée.
                        rl.question(
                            "Jour (1 à 7) : ",
                            function (jour) {

                                // Demander le nombre d'exercices terminés.
                                rl.question(
                                    "Exercices terminés : ",
                                    function (exercicesTermines) {

                                        // Demander le nombre total d'exercices.
                                        rl.question(
                                            "Total d'exercices proposés : ",
                                            function (totalExercices) {

                                                // Demander si le challenge est terminé.
                                                rl.question(
                                                    "Challenge terminé (oui/non) : ",
                                                    function (challenge) {

                                                        // Créer l'objet "resultat"
                                                        // avec toutes les informations de la journée.
                                                        let resultat = {

                                                            // Convertir le jour en nombre.
                                                            jour: Number(jour),

                                                            // Convertir les exercices terminés
                                                            // en nombre.
                                                            exercicesTermines:
                                                                Number(exercicesTermines),

                                                            // Convertir le total des exercices
                                                            // en nombre.
                                                            totalExercices:
                                                                Number(totalExercices),

                                                            // Transformer la réponse "oui/non"
                                                            // en valeur booléenne true ou false.
                                                            challengeTermine:
                                                                challenge.toLowerCase() === "oui"
                                                        };

                                                        // Appeler enregistrerResultat()
                                                        // pour ajouter ou modifier le résultat.
                                                        let message =
                                                            enregistrerResultat(
                                                                Number(id),
                                                                resultat
                                                            );

                                                        // Afficher le message retourné.
                                                        console.log(message);

                                                        // Vérifier si le résultat a bien été ajouté
                                                        // ou modifié avant de recalculer la progression.
                                                        if (
                                                            message === "resultat ajouté" ||
                                                            message === "resultat modifié"
                                                        ) {

                                                            // Calculer la nouvelle progression
                                                            // de l'apprenant.
                                                            let progression =
                                                                calculerProgression(
                                                                    Number(id)
                                                                );

                                                            // Afficher la progression obtenue.
                                                            console.log(
                                                                apprenant.nomComplet,
                                                                ": progression",
                                                                progression.pourcentage,
                                                                "%"
                                                            );
                                                        }

                                                        // Réafficher le menu après l'opération.
                                                        afficherMenu();
                                                    }
                                                );
                                            }
                                        );
                                    }
                                );
                            }
                        );
                    }
                );

                break;

            // CASE 6 : Rechercher un apprenant par son nom.
            // Cette option permet de rechercher un nom même si
            // l'utilisateur écrit avec des espaces ou des majuscules différentes.
            case "6":

                // Demander le nom à rechercher.
                rl.question(
                    "Nom à rechercher : ",
                    function (nomRecherche) {

                        // Nettoyer et normaliser le nom recherché.
                        let recherche =
                            normaliserNom(nomRecherche);

                        // Créer une variable pour savoir
                        // si un apprenant a été trouvé.
                        let trouve = false;

                        // Parcourir tous les apprenants.
                        for (
                            let i = 0;
                            i < apprenants.length;
                            i++
                        ) {

                            // Normaliser le nom de l'apprenant actuel.
                            let nom =
                                normaliserNom(
                                    apprenants[i].nomComplet
                                );

                            // Vérifier si le nom de l'apprenant
                            // contient le texte recherché.
                            if (nom.includes(recherche)) {

                                // Afficher les informations de l'apprenant trouvé.
                                console.log(
                                    apprenants[i].id,
                                    apprenants[i].nomComplet,
                                    apprenants[i].ville
                                );

                                // Indiquer qu'au moins un apprenant
                                // a été trouvé.
                                trouve = true;
                            }
                        }
                        // Vérifier si aucun apprenant n'a été trouvé.
                        if (!trouve) {

                            console.log(
                                "Aucun apprenant trouvé"
                            );
                        }

                        // Réafficher le menu après la recherche.
                        afficherMenu();
                    }
                );

                break;
            // CASE 7 : Filtrer les apprenants selon leur niveau.
            // Cette option demande un niveau puis utilise
            // filtrerParNiveau() pour récupérer les apprenants correspondants.
            case "7":

                // Demander le niveau recherché.
                rl.question(
                    "Niveau (solide / en progression / À renforcer) : ",
                    function (niveau) {

                        // Appeler filtrerParNiveau()
                        // avec le niveau saisi par l'utilisateur.
                        let resultat =
                            filtrerParNiveau(niveau);

                        // Vérifier si aucun apprenant ne correspond au niveau.
                        if (resultat.length === 0) {

                            console.log(
                                "Aucun apprenant trouvé"
                            );

                        } else {


                            // Parcourir la liste des apprenants filtrés.
                            for (
                                let i = 0;
                                i < resultat.length;
                                i++
                            ) {

                                // Afficher le nom de chaque apprenant trouvé.
                                console.log(
                                    resultat[i].nomComplet
                                );
                            }
                        }

                        // Réafficher le menu après le filtrage.
                        afficherMenu();
                    }
                );

                break;
            // CASE 8 : Trier les apprenants par progression décroissante.
            // Cette option utilise trierParProgression()
            // pour placer les plus grandes progressions en premier.
            case "8":

                // Appeler la fonction de tri.
                let listeTriee =
                    trierParProgression();


                // Parcourir la liste après le tri.
                for (
                    let i = 0;
                    i < listeTriee.length;
                    i++
                ) {
                    // Calculer la progression de l'apprenant actuel.
                    let progression =
                        calculerProgression(
                            listeTriee[i].id
                        );

                    // Afficher le nom et le pourcentage de progression.
                    console.log(
                        listeTriee[i].nomComplet,
                        progression.pourcentage + "%"
                    );
                }
                // Réafficher le menu après le tri.
                afficherMenu();

                break;

            // CASE 9 : Trier les apprenants par ordre alphabétique.
            // Cette option utilise sort() avec une fonction de comparaison
            // pour comparer les noms des apprenants.
            case "9":

                // Comparer les noms de deux apprenants à la fois.
                // normaliserNom() permet de rendre la comparaison uniforme.
                // localeCompare() permet de déterminer l'ordre alphabétique.
                apprenants.sort(function (a, b) {

                    return normaliserNom(a.nomComplet)
                        .localeCompare(
                            normaliserNom(b.nomComplet)
                        );
                });

                // Parcourir le tableau après le tri.
                for (
                    let i = 0;
                    i < apprenants.length;
                    i++
                ) {

                    // Afficher le nom de chaque apprenant.
                    console.log(
                        apprenants[i].nomComplet
                    );
                }

                // Réafficher le menu après le tri.
                afficherMenu();

                break;

            // CASE 0 : Quitter le programme.
            // Cette option ferme l'interface readline
            // et arrête les interactions avec le terminal.
            case "0":

                console.log(
                    "Merci d'avoir utilisé SAS Progress Console."
                );

                // Fermer l'interface readline.
                rl.close();
                break;

            // DEFAULT : Gérer un choix qui n'existe pas.
            // Si l'utilisateur saisit autre chose que 0 à 9,
            // afficher un message d'erreur puis réafficher le menu.
            default:

                console.log(
                    "Choix invalide. Veuillez choisir entre 0 et 9."
                );

                // Réafficher le menu pour permettre
                // à l'utilisateur de faire un nouveau choix.
                afficherMenu();
        }
    });
}
// Lancer le menu lorsque le programme démarre.
afficherMenu();
let start = confirm("Souhaitez-vous démarrer une nouvelle partie?");
    if(start){
     let targetNumber = Math.floor(Math.random()*100)+1; // +1 pour ne pas avoir le 0 et démarrer à 1. Math.floor pour chiffre entier.
       let question = 0;
       let point = 90;

        while(question < 10) {
            question++;
            let chooseNumber = parseInt(prompt ("Choisissez un nombre entre 0 et 100 " + "(" + question + "/10 )" ));

            if( targetNumber === chooseNumber  && chooseNumber <= 100 && chooseNumber >= 1){
                alert("Bravo! vous avez trouvé le bon nombre en " + question +" essais! Vous avez fait un score de " + point + " !");
                break;
            }
            else if(targetNumber < chooseNumber && chooseNumber <= 100 && chooseNumber >= 1) {
                alert("Le chiffre est plus petit que " + chooseNumber);
                point = point - 10;
            }
            else if(targetNumber > chooseNumber && chooseNumber <= 100 && chooseNumber >= 1){
                alert("Le chiffre est plus grand que " + chooseNumber);
                point = point - 10;

            }

            else{
                alert("Réponse invalide")
                question = question - 1
            }

        }

        if(question >= 10){
            alert("« ECHEC : le nombre à trouver était " + targetNumber + " !")
        }
    }

//attendre le chargement complet du fichier html
document.addEventListener("DOMContentLoaded", function() {

    //déclaration de la constante qui correspond à tous les éléments qui portent la classe question 
    const question = document.querySelectorAll('.question');
    console.log(question);

    //déclaration de la constante qui correspond à tous les éléments qui portent la classe question 
    const reponse = document.querySelectorAll('.reponse');
    console.log(reponse);


    //Création de la boucle for, i = premier element du tableau, question.length = le nombre d'elements du tableau, i++ = on rajoute 1 à i à chaque tours
    for (let i = 0; i < question.length; i++) {

        //écoute de l'evenement click sur une question qui correspond à i 
        question[i].addEventListener("click", function(event) {

            //déclaration de la constante qui correspond à l'élément suivant la question selectionnée 
            const reponseSuivante = this.nextElementSibling;

            //si reponseSuivante à un display block, passer en display none sinon passer en display block
            if (reponseSuivante.style.display === "block") {
            
                reponseSuivante.style.display = "none";
            
            if (this === document.activeElement) {
                // retire le focus
                this.blur(); 
            }
            } else {
            
            reponseSuivante.style.display = "block";
            }

    }
    )}
    
})
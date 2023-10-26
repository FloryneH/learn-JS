//Déclaration de la variable form sur l'élément form de l'html
let form = document.querySelector("form");
console.log(form);

//Déclaration de la variable input sur les éléments de la class .champ
let input = document.querySelectorAll(".champ");
console.log(input);

//Parcouri les éléments input dans le tableau input
for (let i = 0; i < input.length; i++){

    //Ajout d'une écoute sur les input ("input" = l'événement ce déclanche à chaque fois que la valeur d'input change)
    input[i].addEventListener("input", () => {

        //Si input valide
        if (input[i].validity.valid) {

            //Assigner une chaine de caractère vide à input
            input[i].textContent = "";

            //Faire disparaitre l'image de background d'erreur
            input[i].style.backgroundImage = 'none';

            //Changer la couleur du border
            input[i].style.border = "1px solid #5E54A4";

            //Faire disparaitre le message d'erreur que sur trouve juste après l'input
            input[i].nextElementSibling.style.display = "none";
        }

        //Si input invalide
        else {

            //attribuer la classe errorA au formulaire
            form.className = "errorA";

            //Afficher l'image de background de l'erreur
            input[i].style.backgroundImage = 'url("assets/images/error.svg")';

            //Afficher le border en rouge
            input[i].style.border = "1px solid var(--color-red)";

            //Afficher le paragraphe d'erreur qui se trouve juste après l'input
            input[i].nextElementSibling.style.display = "block";
        }
    });

    //ajout d'une écoute sur l'evenement submit du formulaire
    form.addEventListener("submit", (event) => {

        //Parcourir les elements input 
        for (let i = 0; i < input.length; i++) {

            //Si input invalide
            if (input[i].validity.invalid) {

                //Ajout de la class errorA au formulaire
                form.className = "errorA";

                //Afficher le message d'erreur
                input[i].nextElementSibling.style.display = "block";

                //Empecher l'envoie du formulaire
                event.preventDefault();
            }
        }
    }
);
}
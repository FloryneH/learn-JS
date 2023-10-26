//Déclarer la variable du formulaire en entier
const formulaire = document.getElementById('formulaire');
console.log (formulaire)


//Ajout d'une écoute du bouton submit 
formulaire.addEventListener( "submit", function (event) {
    
    event.preventDefault();
    
    //Déclarer la variable de l'element input checker
    let input = document.querySelector('.valeur:checked').value;
    console.log (input);

    //Remplacer la valeur du texte de remerciement
    document.getElementById("select").innerText = `You selected ${input} out of 5`;

    //Cacher la première div
    document.getElementById("container_1").style.display = "none";

    //afficher la deuxième div 
    document.getElementById("container_2").style.display = "flex";
})






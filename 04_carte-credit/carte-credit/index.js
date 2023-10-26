const form = document.querySelector("form");
let input = document.querySelectorAll("input[type='text']");
const error = document.querySelectorAll("p.error");

let nom = document.querySelector("input[name='name']");
let number = document.querySelector("input[name='number']");
let mois = document.querySelector("input[name='mois']")
let annee = document.querySelector("input[name='annee']");
let cvc = document.querySelector("input[name='cvc']");

const submit = document.querySelector("input[type='submit']");

let numberCard = document.querySelector("#numberCard");
let nomCard = document.querySelector("#nameCard");
let moisCard = document.querySelector("#moisCard");
let anneeCard = document.querySelector("#anneeCard");
let cvcCard = document.querySelector("#cvcCard");

nom.addEventListener("keyup", (e) => {
    nomCard.innerHTML = `${nom.value}`;
});
number.addEventListener("keyup", (e) => {
    numberCard.innerHTML = `${number.value}`;
});
mois.addEventListener("keyup", (e) => {
    moisCard.innerHTML = `${mois.value}`;
});
annee.addEventListener("keyup", (e) => {
    anneeCard.innerHTML = `${annee.value}`;
});
cvc.addEventListener("keyup", (e) => {
    cvcCard.innerHTML = `${cvc.value}`;
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    for (let i = 0; i < input.length; i++) {
        console.log(input[i].validity.patternMismatch);
        
        if (input[i].validity.patternMismatch) {
            console.log("dans le if");
            event.preventDefault();

            let verifError = input[i].nextElementSibling;
            if (verifError && verifError.classList.contains('error')) {
                verifError.textContent = 'error';
            } else {
                const pError = document.createElement('p');
                pError.classList = 'error';
                pError.textContent = 'error';
                pError.style.color = '#FF5050';
                pError.style.marginTop = '0';
                input[i].insertAdjacentElement("afterend", pError);
                input[i].style.border = '1px solid var(--color-red)'
            }
        } else {
            let verifError = input[i].nextElementSibling;
            if (verifError && verifError.classList.contains('error')) {
                verifError.remove();
            }
            input[i].style.border = '1px solid var(--light-grey)'
        }
    }
});
    
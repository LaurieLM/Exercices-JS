let input1 = document.querySelector('#input1');
let input2 = document.querySelector('#input2');
let chiffre1 = 0;
let chiffre2 = 0;

input1.addEventListener('input', function () {
    chiffre1 = this.value;
    console.log(chiffre1);
});
input2.addEventListener('input', function () {
    chiffre2 = this.value;
    console.log(chiffre2);
});

let button_addition = document.getElementById('button_addition')

if (chiffre1 < 0 || chiffre1 > 9 || chiffre2 < 0 || chiffre2 > 9) {
    document.getElementById('message_error1').style.visibility = "visible";
};

let resultat = chiffre1 + chiffre2;
// console.log(resultat);
let resultat_elem = document.createElement('p')
let resultat_nombre = document.createTextNode(resultat);
let resultat_affichage = document.getElementById('resultat_affichage');
    
button_addition.addEventListener('click', event => {
    if (typeof chiffre1 !== 'number' || typeof chiffre2 !== 'number' || chiffre1 == null || chiffre2 == null) {
        document.getElementById('message_error2').style.visibility = "visible";
    
    } else {
        resultat_affichage.appendChild(resultat_elem);
        resultat_elem.appendChild(resultat_nombre);
    };   
});

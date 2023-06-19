let chiffre1 = 5;
let chiffre2 = 2;
let button_addition = document.getElementById('button_addition')

// console.log(chiffre1);
// console.log(chiffre2);

if (chiffre1 < 0 || chiffre1 > 9 || chiffre2 < 0 || chiffre2 > 9) {
    document.getElementById('message_error1').style.visibility = "visible";
};


button_addition.addEventListener('click', event => {
    let resultat = chiffre1 + chiffre2;
    console.log(resultat);
    let resultat_elem = document.createElement('p')
    let resultat_nombre = document.createTextNode(resultat);
    let resultat_affichage = document.getElementById('resultat_affichage');
    resultat_affichage.appendChild(resultat_elem);
    resultat_elem.appendChild(resultat_nombre);

});
    

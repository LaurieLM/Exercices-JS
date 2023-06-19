document.addEventListener('DOMContentLoaded', function() {
    let input1 = document.createElement('input');
    let input2 = document.createElement('input');

    input1.type = 'number';
    input1.id = 'input1';
    input1.value = 'Number';

    input2.type = 'number';
    input2.id = 'input2';
    input2.value = 'Number';

    let container = document.getElementById('container');
    container.appendChild(input1);
    container.appendChild(input2);

}, false);

let chiffre1 = input1;
let chiffre2 = input2;

let error1 = document.createElement('p');
error1.id = "error1";
let error1_message = document.createTextNode ('Saisie incorrecte, entrez un chiffre entre 0 et 9 inclus')
let message_error1 = document.getElementById('message_error1')
message_error1.appendChild(error1);
error1.appendChild(error1_message);

// if (input1.value = null)  {
//     let k = document.getElementsById('error1');
//     k.style.display = "none";
// };

let button_addition = document.createElement('button');
button_addition.id = "addition";
button_addition.innerHTML = "Additionner";
let btn = document.getElementById('btn');
btn.appendChild(button_addition);
button_addition.addEventListener('click', event => {
    let resultat = chiffre1 + chiffre2;
    console.log(resultat);
    });

let error2 = document.createElement('p');
error2.id = "error2";
let error2_message = document.createTextNode ('Vous devez rentrez deux chiffres')
let message_error2 = document.getElementById('message_error2')
message_error2.appendChild(error2);
error2.appendChild(error2_message);



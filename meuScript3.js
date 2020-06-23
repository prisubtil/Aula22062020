let readlineSync = require('readline-sync');

let usandoMascara = readlineSync.question('Você está usando máscara quando precisa sair de casa? ');
let usandomascaraUpper = usandoMascara.toUpperCase();
let lavandoMaos = readlineSync.question('Você está lavando as mãos frequentemente?');
let lavandomaosUpper = lavandoMaos.toUpperCase();

let comMascara = usandomascaraUpper === 'SIM' ? 'Muito bem ! Você já pode sair' : 'Coloque sua máscara antes de sair';
let maosLimpas = lavandomaosUpper === 'SIM' ? 'Muito bem ! Você já pode sair' : 'Previna-se , Lave as mãos!';
console.log(comMascara);
console.log(maosLimpas);
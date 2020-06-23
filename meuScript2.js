var readlineSync = require('readline-sync');

var numeroVoo = readlineSync.questionInt('Qual o número do seu vôo? ');
var fileira = readlineSync.question('Qual fileira o Sr. deseja sentar? A,B,C,D,E ou F? ');

switch(fileira){
    case 'A':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira A.`);
        break;
    case 'B':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira B.`);
        break;
    case 'C':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira C.`);
        break;
    case 'D':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira D.`);
        break;
    case 'E':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira E.`);
        break;
    case 'F':
        console.log(`O número do seu vôo é ${numeroVoo} , fileira F.`);
        break;
    default:
        console.log('Opção inválida');
}
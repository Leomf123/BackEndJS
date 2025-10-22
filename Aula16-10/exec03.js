/*
    Desenvolva uma função que receba um número inteiro e determine se ele é par ou ímpar.O
    resultado deve ser impresso no console informando o número e se ele é par ou ímpar.
*/
function parImpar(numero){
    numero % 2 == 0 ? console.log('Par') : console.log('Impar');
}

parImpar(12);
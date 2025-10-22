/*
    Elabore uma função que receba um número como parâmetro e determine se ele é
    positivo, negativo ou zero. A função deve imprimir o resultado no console informando a
    classificação do número.
*/

function identificarNumero(numero){
    if (numero > 0){
        console.log('Positivo');
    } else if (numero < 0) {
        console.log('Negativo');
    } else{
       console.log('Zero');
    }
}

identificarNumero(-10);

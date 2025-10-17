//Exercicio medias

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



function situacaoNota(media){
    if (media >= 7) console.log('Aprovado');
    else if (media >= 5) console.log('Recuperação');
        else console.log('Reprovado');
}


situacaoNota(10);

function parImpar(numero){
    numero % 2 == 0 ? console.log('Par') : console.log('Impar');
}

parImpar(12);
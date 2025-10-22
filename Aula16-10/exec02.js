/*
    Crie uma função que receba a média final de um aluno e determine sua situação:
        a.“Aprovado” se a média for maior ou igual a 7;
        b.“Recuperação” se for entre 5 e 6.9;
        c.“Reprovado” se for menor que 5.
        d. A função deve exibir a situação no console.
 */

function situacaoNota(media){
    if (media >= 7) console.log('Aprovado');
    else if (media >= 5) console.log('Recuperação');
        else console.log('Reprovado');
}


situacaoNota(10);

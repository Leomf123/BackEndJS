/*
    1. Escreva um programa que solicite ao usuário dois números e exiba a soma, subtração,
    multiplicação e divisão entre eles.
*/

function operacoes(){
    const numero1 = Number(prompt("Forneça o primeiro número:"));
    const numero2 = Number(prompt("Forneça o segundo número:"));

    const soma = numero1 + numero2;
    const subtracao = numero1 - numero2;
    const multiplicacao = numero1 * numero2;
    const divisao = numero1 / numero2;

    alert(`Os resultados das operações entre os numeros ${numero1} e ${numero2} são:
                Soma: ${soma}
                Subtração: ${subtracao}
                Multiplicação: ${multiplicacao}
                Divisão: ${divisao}
        `)
}

operacoes();
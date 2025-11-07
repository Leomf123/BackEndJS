

// Comportamento do continue -> Pula o restante do conteúdo do bloco e volta pra ele
// bloco só loop? Sim, só loop (enclosing iteration statement)

let j = 0;

if(j == 0){
    console.log(j);
    continue; // Gera erro
    console.log(j++);
}
console.log(1);





// loop infinito
let i = 0;
do{
    if(i == 3) {
        continue;
    }
    
    console.log(i);
    i++;
}while(i < 5)

// for intera numeros alem de i++, decimal, dois em dois? 

/*
    O que vimos:
        for
        for in -> atributos de objetos
        for of -> indices de array
        while
        do... while
*/


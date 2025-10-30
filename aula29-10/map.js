
function dobrado(numero){
    return numero * 2;
}

const numeros = [1,2,3,4];

const numerosDobrados1 = numeros.map((numero) => numero * 2);
console.log(numerosDobrados1);

const numerosDobrados2 = numeros.map(function(numero) { 
    return numero * 2
});
console.log(numerosDobrados2);

// const numerosDobrados3 = numeros.map(dobrado(numero));
// console.log(numerosDobrados3);
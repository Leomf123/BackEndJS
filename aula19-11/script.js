
function criarContador(incremento = 1){

    let valor = 0;
    return function contar(){
        return valor += incremento;
    }
}

const c1 = criarContador(2);
const c2 = criarContador(5);
const c3 = criarContador();

console.log(c1());
console.log(c1());
console.log(c1());

console.log(c2());
console.log(c2());

console.log(c3());
console.log(c3());
console.log(c3());
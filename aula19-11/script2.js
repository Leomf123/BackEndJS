function criarFiltro(limite){
    return function filtrar(vetor){
        return vetor.filter((value) => value > limite);
    }
}

const c1 = criarFiltro(10);
const c2 = criarFiltro(50);
const c3 = criarFiltro(-5);


console.log(c1([10, 20 , -5, 100, 50]));
console.log(c2([10, 20 , -5, 100, 50]));
console.log(c3([10, 20 , -5, 100, 50]));



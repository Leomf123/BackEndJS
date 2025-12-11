

function fibonacci(n){
    if( n === 0) return 0;
    if (n === 1) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

function gerarSequencial(qtd){
    const sequencia = [];
    let i = 0;
    while(i <= qtd){
        sequencia[i] = fibonacci(i);
        i++;
    }
    return sequencia;
}


console.log(gerarSequencial(10));
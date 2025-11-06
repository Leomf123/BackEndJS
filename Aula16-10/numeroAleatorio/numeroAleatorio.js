function verificarNumero(numeroAleatorio, numeroUsuario){
    
    if (numeroUsuario < numeroAleatorio) return 'MAIOR';
    if (numeroUsuario > numeroAleatorio) return 'MENOR';
    if (numeroUsuario == numeroAleatorio) return `PARABÉNS!!! Você acertou o número ${numeroAleatorio}`;
    
}

numeroAleatorio = Math.floor(Math.random() * 100);

console.log(numeroAleatorio);


while(true){
    numeroUsuario = prompt('Insira seu palpite ( Número de 1 a 100):');
    
}

verificarNumero(numeroAleatorio, numeroUsuario)



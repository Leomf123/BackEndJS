alert('Seja Bem-vindo!');

const nomeDoUsuario = prompt('Qual seu nome?');

console.log(typeof nomeDoUsuario);

const confirmarNomeDoUsuario = confirm('Seu nome está certo? (' + nomeDoUsuario + ')' );

if(confirmarNomeDoUsuario){
    alert(`Olá, ${nomeDoUsuario}`);
}
else{
    alert(`Nome não fornecido!`);
}

function* geradorId(){
    let id = 1;
    while(true){
        yield id++;
    }
}

const id = geradorId();

for( valor of id){
    console.log(valor);
    if(valor == 10) break;

}

function criarUsuario(qtd){
    const usuarios = [];
    for(let i=0;i<qtd; i++){
        const usuarioId = id.next().value;
        usuarios[i] = {'id': usuarioId, 'nome': `Usuário ${usuarioId}` }
    }
    return usuarios;

}

console.log(criarUsuario(5));

console.log(id.next().value);
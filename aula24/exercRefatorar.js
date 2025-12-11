class Produto{
    constructor(nome, quantidade){
        this.nome = nome;
        this.quantidade = quantidade;
    }
    adicionarEstoque(quantidade){
        this.quantidade +=quantidade;
    }
    removerEstoque(quantidade){
        if(this.quantidade >= quantidade){
            this.quantidade -=quantidade;
        }else console.log('Estoque insuficiente');
    }
    verEstoque(){
        console.log(`Produto: ${this.nome} | Quantidade: ${this.quantidade}`);
    }   
}

const produto1 = new Produto('camiseta', 10);
produto1.adicionarEstoque(5);
produto1.verEstoque();
produto1.removerEstoque(3);
produto1.verEstoque();



const alunos = [
    {nome: 'Diego', nota: 9.0},
    {nome: "Ana", nota: 6.5},
    {nome: 'Lucas', nota: 7.2},
    {nome: 'Mariana', nota: 8.3},
    {nome: 'João', nota: 5.9}
];

const aprovados = alunos.filter(aluno => aluno.nota >= 7);
//const media = aprovados.reduce((acum, aluno) => acum + aluno.nota, 0 );


const media = aprovados.reduce((acum, aluno) => {

    console.log(acum);
    console.log(aluno);

    return acum += aluno.nota;
    
}, 0) / aprovados.length;

const nomeAprovados = aprovados.map(aluno => aluno.nome);
const notaAprovados = aprovados.map(aluno => aluno.nota);

console.log(nomeAprovados);
console.log(notaAprovados);
console.log(media.toFixed(2));








function verificaEstacao(){

    const verao  = ['dezembro', 'janeiro', 'fevereiro'];
    const outono = ['março', 'abril', 'maio'];
    const inverno = ['junho', 'julho', 'agosto'];
    const primavera = ['setembro', 'outubro', 'novembro'];

    let mes = document.getElementById('entrada').value;
    const resultado = document.getElementById('resultado');
    
    if (mes == '') resultado.innerHTML = '<p> Insira um mês!</>';
    else{

        mes = mes.toLowerCase();
        if (verao.includes(mes)) resultado.innerHTML = '<p> Verão </p>';
        else if (outono.includes(mes)) resultado.innerHTML = '<p> Outono </p>';
            else if (inverno.includes(mes)) resultado.innerHTML = '<p> Inverno </p>';
                else if (primavera.includes(mes)) resultado.innerHTML = '<p> Primavera </p>';
                    else resultado.innerHTML = '<p> Forneça um mês válido!!! </p>';

    }

}



//lista global
const listaPessoas = [];
function calcular(e) {
    e.preventDefault();
    let nome = document.getElementById("nome").value.trim();
    let altura = parseFloat(document.getElementById("altura").value);
    let peso = parseFloat(document.getElementById("peso").value);

    if (isNaN(altura) || isNaN(peso) || nome.lenght < 2) {
        alert('É necessário preencher todos os campos')
        return;
    }

    const imc = calcularImc(peso, altura);
    const situacao = geraSituacao(imc);
    //  console.log(nome);
    //  console.log(altura);
    //  console.log(peso);
    //  console.log(imc);
    //  console.log(situacao);

    const pessoa = {
        nome: nome,
        altura: altura,
        peso: peso,
        imc: imc,
        situacao: situacao
    }
    //insere uma pessoa no array
    listaPessoas.push(pessoa);

    exibirDados();

}

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
    //return peso / (altura * altura);
}

function geraSituacao(imc) {

    if (imc < 18.5) {
        return "Magreza Severa";
    }

    else if (imc <= 24.99) {
        return "Peso normal";
    }

    else if (imc <= 29.99) {
        return "Acima do peso";
    }

    else if (imc <= 34.99) {
        return "Obesidade I"
    }

    else if (imc <= 39.99) {
        return "Obesidade II"
    }

    else {
        return "Cuidado!!!"
    }
}


function exibirDados() {


    //console.log(listaPessoas);
    //listar as pessoas no console
    let linhas = "";
    listaPessoas.forEach(function (oPessoa) {
        linhas += `

            <tr>
                <td>${oPessoa.nome}</td>
                <td>${oPessoa.altura}</td>
                <td>${oPessoa.peso}</td>
                <td>${oPessoa.imc}</td>
                <td>${oPessoa.situacao}</td>
            </tr>
            `;
    })

    document.getElementById('cadastro').innerHTML = linhas;
}
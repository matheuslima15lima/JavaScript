//
function calcular(){
    event.preventDefault();
    let n1 = parseFloat (document.getElementById("numero1").value);
    let n2 = parseFloat(document.getElementById("numero2").value);
    let res = parseFloat(n1) + parseFloat(n2)
    let op = document.getElementById("operacao").value;
    console.log(n1);
    console.log(n2);

    if( isNaN(n1) || isNaN(n2))
    {
        alert("Preencha todos os campos")
        return; //Com esse return ele para aqui, assim não precisa do else
    }

    if(op == '+'){
        res = somar (n1, n2);
        console.log(`Resultado: ${res}`)
    }

    else if (op =='-'){
        res = subtrair(n1, n2);
        console.log(`Resultado: ${res}`)
    }

    else if( op == '*')
    {
        res = multiplicar(n1, n2);
        console.log(`Resultado: ${res}`)
    }

    else if (op == '/')
    {
        res = Dividir (n1, n2);
        console.log(`Resultado: ${res}`)
    }

    else
    {
        res = "Operação inválida"
        console.log(`Resultado ${res}`)
    }

    document.getElementById(`resultado`).innerText = res;
    //criar a validação para toda as opções,inclusive a inválida
    //criar função para cada operação
}//fim da função calcular

function somar(x,y) {
    return (x + y).toFixed(2);  
  
}

function subtrair(x,y){
    return x - y.toFixed(2);
}

function multiplicar(x,y){
    return (x * y).toFixed(2);
}

function Dividir(x,y) {
 

    if(y==0)
    {
        return "Quem você pensa que é? Chris Bumstead o Cibam?";
    }

    return (x / y).toFixed(2);
}
//</script>
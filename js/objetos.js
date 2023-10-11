let eduardo = {
    nome: "Eduardo",
    idade: 41,
    altura: 1.67
};

eduardo.peso = 89;

console.log(eduardo);

let carlos = new Object();

carlos.nome = "Carlos"
carlos.idade = "36"
carlos.sobrenome = "Roque"
console.log(carlos)

let pessoas = [];
pessoas.push(carlos);
pessoas.push(eduardo);

console.log(pessoas)
//exibir o nome das pessoas utilizando o foreach

pessoas.forEach(function(n,i){

    console.log(`Nome${i+1}: ${n.nome}`)

})
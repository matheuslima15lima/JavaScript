const somar =  (x, y) => {
    return x + y
}
//console.log(somar(50, 10));

// const dobro = (numero) => {
//  return numero * 2;
// }

// const dobro = numero => {
//   return numero * 2;
//  }

// const dobro = numero =>  numero * 2;

// console.log(dobro(10));

//precisa colocar os parenteses nessa função porque não tem parametros
// precisa de chaves porque não tem return
//const boaTarde = () => {console.log("Boa tarde");}
//boaTarde();

const convidados = [
    {nome:"Carlos", idade: 36},
    {nome: "Claiton", idade: 36},
    {nome:"Rebeca", idade:16},
    {nome:"Magalhães", idade:16},
    {nome: "Lucca", idade:18},
    {nome:  "Guilherme Henrique", idade:18}
   
];
convidados.forEach( p => {
    console.log(`Convidado: ${p.nome}`);
});
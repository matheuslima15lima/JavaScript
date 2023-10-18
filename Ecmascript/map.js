//foreach - void
//map - novo array modificado
//filter
//reduce

// FILTER retorna um array apenas com elemntos que atenderam a uma condição
// const numeros = [1,2,5,10,300];
// const maior10 = numeros.filter((e) => {
//     return e >= 10;
// });
// console.log(maior10);

//MAP
// const numeros = [1,2,5,10,300];

// const dobro = numeros.map( (n) => {
//     return n * 2
// });
//console.log(dobro);


// const comentarios = [
//     {comentario: "bla bla bla", exibe: true},
//     {comentario: "Evento foi uma", exibe: false},
//     {comentario: "Ótimo Evento!", exibe: true},

// ];

// const comentariosOk = comentarios.filter((c) => {
//     return c.exibe == true;
// });

// comentariosOk.forEach((c) => {
//     console.log(c.comentario);
// })
//exibir os comentarios no console, utilizando o foreach

const numeros = [1,2,5,10,300];

const soma = numeros.reduce((vlInicial, numero) => {
    return vlInicial + numero;
}, 20);
// const camisaLacoste = {
//     descricao: "Camisa Lascoste",
//     tamanho: "G",
//     cor: "Azul",
//     promo: false,
//     preco: 1000.00
// }

// const{descricao, preco, promo} = camisaLacoste;

// console.log(`
//     descricao ${descricao},
//     Preco: R$${preco},
//     Promoção: ${promo ? "sim" : "Não"}
// `)

/*
Crie um objeto evento com as propriedades 
    *DATA EVENTO
    *DESCRICAO FDO EVENTO
    *TITULO
    *PRESENCA
    *COMENTARIO

    CRIAR UM DESTRUCTURING

    EXIBIR SIM OU NAO
    */

    const evento = {
        dataEvento: new Date(),
        descricao:"Evento de C#",
        titulo:"C#",
        presenca: true,
        comentario:"Muito bom!!!"
        

    }

    const{dataEvento, descricao,titulo, ...resto} = evento;
    console.log(dataEvento);
    console.log(descricao);
    console.log(titulo);
    console.log(resto);



    // console.log(`
    //     Evento: ${titulo} 
    //     Descrição: ${descricao}
    //     Data: ${dataEvento}
    //     Presença: ${presenca ? "Confirmada" : "Não confirmada"}
    //     Comentario: ${comentario}
    // `);
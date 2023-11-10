
/**função que inverte a do banco de dados
 * param{*}data
 * @returns
 */
 
export const dateFormatDbToView = data => {
        data = data.substr(0,10); //retorna a penas a data(2023-09-2023)
        data = data.split("-");// retorna um array[2023,09,30]
        return `${data[2]} / ${data[1]}/ ${data[0]}`//retorna 30/09/2023
}

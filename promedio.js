// const lista1 = [
//     100, 200, 300, 500,
// ]

// let sumarList1 = 0

// for(let i = 0; i < lista1.length; i++) {
//     sumarList1 += lista1[i]
// }

// const promedioLista1 = sumarList1 / lista1.length

// CALCULO DE MEDIA ARITMETICA
function calcularMediaAritmetica(lista) {
    // let sumarLista = 0

    // for(let i = 0; i < lista.length; i++) {
    //     sumarLista += lista[i]
    // }
    const sumarLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => 
        valorAcumulado + nuevoElemento
    )

    const promedioLista = (sumarLista / lista.length)

    return promedioLista
}
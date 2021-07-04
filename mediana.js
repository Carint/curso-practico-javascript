// Datos sin ordenar
const lista1 = [
    200, 580, 100, 400000000, 3, 375
]

const mitadLista1 = parseInt(lista1.length/2)
let mediana

function comparar ( a, b ){ return a - b; }

function calcularMediaAritmetica(lista) {
    lista1.sort( comparar )
    const sumarLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => valorAcumulado + nuevoElemento)
    const promedioLista = (sumarLista / lista.length)

    return promedioLista
}

// Evaluacion si el numero es par
function esPar(num) {
    return num % 2 === 0 ? true : false
}

// Condicional para evaluar la mediana dependiendo si el arreglo es par o no
if (esPar(lista1.length)) {
    const elemento1 = lista1[mitadLista1-1]
    const elemento2 = lista1[mitadLista1]
    const promedioElemento1y2 = calcularMediaAritmetica([ elemento1, elemento2 ])

    mediana = promedioElemento1y2
} else {
    mediana = lista1[mitadLista1]
}


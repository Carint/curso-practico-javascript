const listaNumeros = [
    1,2,3,1,2,3,4,4,4,4,7,2,2,1,
]

const listaNumeros2 = [
    3,4,5,23,3,4,3,23,2,3,34,4,3,3,3,2,2,2,2
]

function calcularModa(listNum) {
    const listaNumCount = {}

    listNum.map(
        (elemento) => 
            listaNumCount[elemento] ? listaNumCount[elemento] += 1 : listaNumCount[elemento] = 1 
    )
         
    const list1Array = Object.entries(listaNumCount).sort(
        (valorAcumulado, nuevoValor) => nuevoValor[1] - valorAcumulado[1]
    )

    const moda = list1Array[0]
    console.log(list1Array)
    return console.log('El valor de la moda es ' + moda[0] + ', y se repite ' + moda[1] + ' veces')
}


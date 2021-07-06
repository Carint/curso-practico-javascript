// HELPERS
// -----------------------------------------------------------
function esPar(num) {
  return (num % 2 === 0)
}

function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(
    function (valorAcumulado = 0, nuevoElemento) {
      return valorAcumulado + nuevoElemento;
    }
  );
  const promedioLista = sumaLista / lista.length;
  return promedioLista;
}

// CALCULADORA DE MEDIANAS
// -----------------------------------------------------------
function medianaSalarios(lista) {
  const mitad = parseInt(lista.length / 2)

  if(esPar(lista.length)) {
    const personaMitad1 = lista[mitad - 1]
    const personaMitad2 = lista[mitad]

    const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2])
    return mediana
  } else {
    const personaMitad = lista[mitad]
    return personaMitad
  }
}

// MEDIANA GENERAL
// -----------------------------------------------------------
const salariosHnd = honduras.map(
  (persona) => persona.salary
)

const salariosColSorted = salariosHnd.sort(
  (salaryA, salaryB) => salaryA - salaryB
)

const medianaGeneralCol = medianaSalarios(salariosColSorted)

// MEDIANA DEL TOP 10%
// -----------------------------------------------------------
const spliceStart = (salariosColSorted.length * 90)/100
const spliceCount = salariosColSorted.length - spliceStart
const salariosHndTop10 = salariosColSorted.splice(spliceStart, spliceCount)

const medianaTop10Hnd = medianaSalarios(salariosHndTop10)

console.log({
  medianaGeneralCol,
  medianaTop10Hnd
})

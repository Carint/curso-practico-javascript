// Cuadrado
// ------------------------------------------------------
// console.group('Cuadrado')
// const ladoCuadrado = 5
// const perimetroCuadrado = ladoCuadrado * 4
// const areaCuadrada = ladoCuadrado * ladoCuadrado

// console.log('Los lados del cuadrado miden: ' + ladoCuadrado + 'cm')
// console.log('El perímetro del cuadrado es: ' + perimetroCuadrado + 'cm')
// console.log('El área del cuadrado es: ' + areaCuadrada + 'cm^2')

// console.groupEnd()

// Funciones que encapsulan las funcionalidades de cuadrado
function perimetroCuadrado(lado) {
    return lado > 0 ? lado * 4 : 'Ingresar un valor válido'
}

function areaCuadrado(lado) {
    return lado > 0 ? lado * lado : 'Ingresar un valor válido'
}

//  Triángulo
// ------------------------------------------------------
// console.group('Triángulos')
// const ladoTriangulo1 = 6
// const ladoTriangulo2 = 6
// const baseTriangulo = 4
// const alturaTriangulo = 5.5
// const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo
// const areaTriangulo = (baseTriangulo*alturaTriangulo)/2

// console.log('Los lados del triángulo miden: ' + ladoTriangulo1 + 'cm, ' + ladoTriangulo2 + 'cm y ' + baseTriangulo + 'cm')
// console.log('La altura del triángulo es: ' + alturaTriangulo)
// console.log('El perímetro del triángulo es: ' + perimetroTriangulo + 'cm')
// console.log('El área del triángulo es: ' + areaTriangulo + 'cm^2')

// console.groupEnd()

// Funciones que encapsulan las funcionalidades de triángulo
function perimetroTriangulo(lado1, lado2, base) { 
    return lado1 > 0 & lado2 > 0 & base > 0 ? lado1 + lado2 + base : 'Ingresar valores válido'
}

function areaTriangulo(altura, base) { 
    return altura > 0 & base > 0 ? (base * altura)/2 : 'Ingresar valores válido'
}

//  Círculo
// ------------------------------------------------------
// console.group('Círculos')
// const radioCirculo = 4
// const diametroCirculo = radioCirculo * 2
// // const pi = 3.1415
// const pi = Math.PI
// const perimetroCirculo = diametroCirculo * pi
// const areaCirculo = (radioCirculo * radioCirculo) * pi

// console.log('El radio del círculo es: ' + radioCirculo + 'cm')
// console.log('El diametro del círculo es: ' + diametroCirculo + 'cm')
// console.log('PI: ' + pi)
// console.log('El perimetro del círculo es: ' + perimetroCirculo + 'cm')
// console.log('El área del círculo es: ' + areaCirculo + 'cm^2')

// console.groupEnd()

// Funciones que encapsulan las funcionalidades de círculo
function diametroCirculo(radio) {
    return radio > 0 ? radio * 2 : 'Ingresar un valor válido'
}

function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio)
    return radio > 0 ? diametro * Math.PI  : 'Ingresar un valor válido'
}

function areaCirculo(radio) {
    return radio > 0 ? (radio * radio) * Math.PI : 'Ingresar un valor válido'
}
// const precioOriginal = 100
// const descuento = 15

// const porcentajePrecioConDescuento = 100 - descuento
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100

// Agrupacion de variables con console.log 
// console.log({
//     precioOriginal,
//     descuento,
//     porcentajePrecioConDescuento,
//     precioConDescuento
// })

// Calculo del precio con el descuento
// ----------------------------------------------------------------------
const coupons = [
    { name: "JuanDC_es_Batman", discount: 15, },
    { name: "pero_no_le_digas_a_nadie", discount: 30, },
    { name: "es_un_secreto", discount: 25, },
];

function calcularPrecioConDescuento(precio, descuento) {
    const precioConDescuento = (precio * (100 - descuento))/100

    return precioConDescuento
}

function priceDiscount() {
    const inputPrice = document.getElementById('InputPrice')
    const inputDiscount = document.getElementById('InputDiscount')
    const inputResultPrice = document.getElementById('resultPrice')

    const priceValue = inputPrice.value
    const discountValue = inputDiscount.value

    const isCouponValueValid = coupon => coupon.name === discountValue
    const userCoupon = coupons.find(isCouponValueValid);
    
    if (!userCoupon) {
        alert("El cupón " + discountValue + " no es válido")
    } else {
        const priceConDescuento = calcularPrecioConDescuento(priceValue, userCoupon.discount)
    
        inputResultPrice.innerText = `El precio con descuento es: ${priceConDescuento}`
    }
}
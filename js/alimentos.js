// JavaScript con JQuery
$(function () {
    let form1 = $('#formulario-frapuccino')
    let form2 = $('#formulario-espressoCaliente')
    let form3 = $('#formulario-espressoFrio')
    var estado = false;
    $('#btn-frapuccino').click(function () {
        if (estado==true) {
            form1.hide()
        } else {
            form1.show()
        }
        estado = !estado
    })
    $('#btn-espressoCaliente').click(function () {
        if (estado==true) {
            form2.hide()
        } else {
            form2.show()
        }
        estado = !estado
    })
    $('#btn-espressoFrio').click(function () {
        if (estado==true) {
            form3.hide()
        } else {
            form3.show()
        }
        estado = !estado
    })
})

// JavaScript Puro
const formFrapuccino = document.getElementById('formulario-frapuccino')
formFrapuccino.addEventListener('submit', envio)
function envio(event){
    event.preventDefault()
    let producto1 = document.getElementById('producto1').value
    let producto2 = document.getElementById('producto2').value
    let productos = []
    if (producto1){
        productos.push(producto1)
    }
    if (producto2){
        productos.push(producto2)
    }
    let cantidad1 = parseInt(document.getElementById('cantidad1').value)
    let cantidad2 = parseInt(document.getElementById('cantidad2').value)
    let precio1 = parseFloat(document.getElementById('precio1').value)
    let precio2 = parseFloat(document.getElementById('precio2').value)
    let stock1 = parseInt(document.getElementById('stock1').value)
    let stock2 = parseInt(document.getElementById('stock2').value)
    let costoTotal = cantidad1 * precio1 + cantidad2 * precio2
    formFrapuccino.reset()

    const carrito = document.getElementById('pedido-carrito')
    carrito.innerHTML = `
        <h1><b>Resumen de la compra</b></h1>
        <br>
        <hr>
        Productos: ${productos}
        <br>
        Cantidad: ${cantidad1}, ${cantidad2}
        <br>
        Costo Total: S/. ${costoTotal}
        <br>
        <label>Elegir método de pago:</label>
        <select required>
            <option selected>Seleccionar</option>
            <option value='Pago Efectivo'>Pago Efectivo</option>
            <option value='Tarjeta VISA o MASTERCARD'>Tarjeta VISA o MASTERCARD</option>
            <option value='Paypal'>Paypal</option>
            <option value='Ethereum'>Ethereum</option>
        </select>
        <br>
        <label>Cuotas:</label>
        <input type="number" min='1' max='12' required/>
        <br>
        <input type="submit" value='Pagar'/>
    `
}


// Variables
const carrito = document.querySelector('#carrito');
const listaProductos = document.querySelector('#lista-productos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito'); 
let articulosCarrito = [];

// Listeners
cargarEventListeners();

function cargarEventListeners() {
     // Dispara cuando se presiona "Agregar Carrito"
     listaProductos.addEventListener('click', agregarProducto);

     // Cuando se elimina un producto del carrito
     carrito.addEventListener('click', eliminarProducto);

     // Al Vaciar el carrito
     vaciarCarritoBtn.addEventListener('click', vaciarCarrito);


     // Muestra los productos de LOCAL STORAGE
     document.addEventListener('DOMContentLoaded', () => {
          articulosCarrito = JSON.parse( localStorage.getItem('carrito') ) || []  ;
          // console.log(articulosCarrito);
          carritoHTML();
     });
}


// Función que añade el producto al carrito
function agregarProducto(e) {
     e.preventDefault();
     // Delegation para agregar-carrito
     if(e.target.classList.contains('agregar-carrito')) {
          const producto = e.target.parentElement.parentElement;
          // Enviamos el producto seleccionado para tomar sus datos
          leerDatosProducto(producto);
     }
}

// Lee los datos del producto
function leerDatosProducto(producto) {
     const infoProducto = {
          imagen: producto.querySelector('img').src,
          titulo: producto.querySelector('h4').textContent,
          precio: producto.querySelector('.precio span').textContent,
          id: producto.querySelector('a').getAttribute('data-id'), 
          cantidad: 1
     }

     const existe = articulosCarrito.some( producto => producto.id === infoProducto.id )
     if( existe ) { 
          const productos = articulosCarrito.map( producto => {
               if( producto.id === infoProducto.id ) {
                    // let cantidad = parseInt(producto.cantidad);
                    // cantidad++
                    // producto.cantidad =  cantidad;
                    producto.cantidad++;
                    return producto;
               } else {
                    return producto;
               }
          });
          articulosCarrito = [...productos];
     }  else {
          articulosCarrito = [...articulosCarrito, infoProducto];
     }
     console.log(existe)

     console.log(articulosCarrito)

     

     // console.log(articulosCarrito)
     carritoHTML();
}

// Elimina el producto del carrito en el DOM
function eliminarProducto(e) {
     e.preventDefault();
     const targetSeleccionado = e.target.classList;
     console.log(targetSeleccionado);
     if(targetSeleccionado.contains('borrar-producto') ) {
          // e.target.parentElement.parentElement.remove();
          const producto = e.target.parentElement.parentElement;
          const productoId = producto.querySelector('a').getAttribute('data-id');
          
          // Eliminar del arreglo del carrito
          articulosCarrito = articulosCarrito.filter(producto => producto.id !== productoId);

          carritoHTML();
     }
}


// Muestra el producto seleccionado en el Carrito
function carritoHTML() {

     vaciarCarrito();

     articulosCarrito.forEach(producto => {
          const { imagen, titulo, precio, cantidad, id } = producto;
          const row = document.createElement('tr');
          row.innerHTML = `
               <td>  
                    <img src="${imagen}" width=100>
               </td>
               <td>${titulo}</td>
               <td>${precio}</td>
               <td>${cantidad} </td>
               <td>
                    <a href="#" class="borrar-producto" data-id="${id}">X</a>
               </td>
          `;
          // Agrega el HTML del carrito en el tbody
          contenedorCarrito.appendChild(row);
     });

     // Agregar el carrito de compras al storage
     sincronizarStorage();

}


// NUEVO: 
function sincronizarStorage() {
     localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}

// Elimina los productos del carrito en el DOM
function vaciarCarrito() {
     // forma lenta
     contenedorCarrito.innerHTML = '';
     // forma rapida (recomendada)
     // while(contenedorCarrito.firstChild) {
     //      contenedorCarrito.removeChild(contenedorCarrito.firstChild);
     //  }
}








function pasarela(){
     var lista = window.open('', 'ventana', 'width=740, height=480');
     
     lista.document.write('<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">');
     lista.document.write("<h1>MÉTODO DE PAGO</h1><hr>");
     lista.document.write("<div class='row container-fluid'>");
     lista.document.write("<div class='col-md-6 mx-auto'>");
     lista.document.write("<form class='form-control m-4'><label class='form-label'>Número de tarjeta de débito:</label><br><input type='number' class='form-control' placeholder='ingrese el número de la tarjeta'><br><label class='form-label'>Tipo:</label><br><select class='form-control'><option selected>Seleccionar</option><option>Visa</option><option>Mastercard</option></select><br>Cuotas:<br><input type='number' class='form-control'><br><button class='btn btn-primary'>Pagar</button></form>");
     lista.document.write("</div>");
     lista.document.write("</div>");
     
 }
/* CASO ECOMMERCE

* TODO TIENEN QUE ESTAR DENTRO DE FUNCIONES
* LA ÚNICA VARIABLE GLOBAL VA A SER LA DEL ARRAY
* EL ARRAY DE OBJETOS PUEDE ESTAR EN EL MISMO CÓDIGO O EN OTRO ARCHIVO

1) Hacer un array de objetos que tenga 15 productos. Cada objeto deberá tener las siguientes propiedades:
    - id
    - producto
    - precio
    - fechaVencimiento (en el caso de que tenga una)
    - descripción
    - categoría (si tiene una)
    - oferta (booleano)

Quiero que algunos de los elementos tengan un true en oferta.

2) Utilizar un método de array que verifique si oferta es true, en el caso de que lo sea, haga un 15%, 5%, 20%, 10% de descuento (elijan el descuento que quieran).

3) Utilizando un método de array, que ordene a los elementos de manera alfabética (a - z o z - a), como ustedes prefieran. También pueden ordenar por número de id (ascendente o descendente).
Usen este método haciendo una copia segura del array. Pueden copiar el array de manera segura con los siguientes métodos: 
    - [...array] ---> spread operator
    - array.slice() ---> copia segura en otra variable
    - [].concat(array) ---> copia segura en otra variable

4) A través de un confirm, pregúntele al usuario si quiere ver las ofertas de la tienda. En el caso de que si, entonces con filter, filtre el array y que muestre en consola cada una de las ofertas.

5) A través de un prompt, permita al usuario buscar productos. Una vez que ingrese un producto, busquen con find dicho producto y muestrelo en un alert(). */

const productos = [
    {
        nombre: "Smart TV 43",
        id: 12563,
        precio: 105000,
        descripcion: "LED 4K UHD Procesador Inteligente a5 4K HDR Activo 4K Sonido Ultra Surround AI ThinQ: Inteligencia Artificial",
        categoria: "Smart TV",
        oferta: false
    },
    {   
        nombre: "Smart TV 55",
        id: 235465,
        precio: 130000,
        descripcion: "Contraste 4000:01  Resolucion 4K  Origen Argentina 55 Pulgadas",
        categoria: "Smart TV",
        oferta: false
    },
    {   
        nombre: "Smart TV 65",
        id: 894532,
        precio: 518000,
        descripcion: "Tecnología OLED    Sonido Dolby Atmos     Dimensiones 	144.87x82.95x5.8cm  Peso 	24.3 kg",
        categoria: "Smart TV",
        oferta: false
    },
    {   
        nombre: "Smart TV 50",
        id: 8752186,
        precio: 114000, //Este producto tiene un 10% de Descuento
        descripcion: "50 pulgadas   AndroidTV   Tecnología 	LED     Garantía del proveedor 	12 meses",
        categoria: "Smart TV",
        oferta: true
    },
    {
        nombre: "Smart TV 32",
        id: 652359,
        precio: 58000, //Este producto tiene un 10% de Descuento
        descripcion: "32 pulgadas   FullHD   Tecnología LED     Garantía del proveedor 	12 meses",
        categoria: "Smart TV",
        oferta: true
    },
    {
        nombre: "Ventilador de pie 21",
        id: 568423,
        precio: 19750, //Este producto tiene un 10% de Descuento
        descripcion: "Material 	Plástico    Aspas de plástico, rejilla cromada  Peso 	4.9 kg",
        categoria: "Climatizacion",
        oferta: true
    },
    {
        nombre: "Ventilador turbo 10",
        id: 4558422,
        precio: 6500,
        descripcion: "Material 	Plástico    3 opciones de uso: piso, mesa y pared. Material de las aspas metal",
        categoria: "Climatizacion",
        oferta: false
    },
    {   
        nombre: "Aire acondicionado split 5850W Inverter",
        id: 8150036,
        precio: 308000,
        descripcion: "Tecnología Inverter   Peso: Unidad interior: 14.1 kg / Unidad exterior: 41.6 kg",
        categoria: "Climatizacion",
        oferta: false
    },
    {
        nombre: "Aire acondicionado split 5200W",
        id: 655450,
        precio: 207000, //Este producto tiene un 10% de Descuento
        descripcion: "Barrido de Aire Automático • Súper Silencioso • Filtros Lavables • Hidden Display • Modo Deshumidificación • Función Sleep",
        categoria: "Climatizacion",
        oferta: true
    },
    {
        nombre: "Aire acondicionado split 3200W Inverter",
        id: 9854236,
        precio: 143500,
        descripcion: "Tecnología Inverter   Dimensiones: Unidad interior: 29.5x80.2x20 cm / Unidad exterior: 49.5x72x27 cm",
        categoria: "Climatizacion",
        oferta: false
    },
    {
        nombre: "Celular Alcatel 5H Plus",
        id: 6548965,
        precio: 46800, //Este producto tiene un 10% de Descuento
        descripcion: "Tamaño de la pantalla 6.52    Batería 	5000 mAh    Cámara trasera 	50MP +2MP +2MP",
        categoria: "Smartphones",
        oferta: true
    },
    {
        nombre: "Celular Samsung Galaxy A13",
        id: 1548562,
        precio: 61000,
        descripcion: "Tamaño de la pantalla 6.6    Batería 	5000 mAh    Cámara trasera 	50MP +5MP +2MP +2MP",
        categoria: "Smartphones",
        oferta: false
    },
    {
        nombre: "Celular Samsung M23",
        id: 1985614,
        precio: 103000,
        descripcion: "Tamaño de la pantalla 6.4    Batería 	5000 mAh    Cámara trasera 	50MP +8MP +2MP",
        categoria: "Smartphones",
        oferta: false
    },
    {   
        nombre: "Celular Motorola Edge Neo",
        id: 548653,
        precio: 119000,
        descripcion: "Tamaño de la pantalla 8.28    Batería 	4020 mAh    Cámara trasera 	64+13MP",
        categoria: "Smartphones",
        oferta: false
    },
    {   nombre: "Celular Motorola Moto G41",
        id: 548653,
        precio: 60000, //Este producto tiene un 10% de Descuento
        descripcion: "Tamaño de la pantalla 6.4    Batería 	5000 mAh    Cámara trasera 	48+8MP",
        categoria: "Smartphones",
        oferta: true
    },
]

function productosconDescuento (productos){
    const productosenOferta = productos.map(item => {
    if (item.oferta) {
      // Aplicamos un descuento del 10%
      item.precio *= 0.9
    }
    return item
  })}
productosconDescuento (productos)
console.log(productos)
  
function ordenarProductos (productos) {
  const productosOrdenados = [...productos].sort((a, b) => {
    if (a.nombre < b.nombre) {
      return -1;
    }
    if (a.nombre > b.nombre) {
      return 1;
    }
    return 0;
    })
    console.log(productosOrdenados)
    }
ordenarProductos (productos)

function quiereVerOfertas (productos) {
    if (confirm("¿Desea ver las ofertas de la tienda?")) {
        const verOfertas = productos.filter(producto => producto.oferta === true)
        verOfertas.forEach(verOfertas => console.log(verOfertas))
      }}

quiereVerOfertas (productos)

function buscarProducto (productos){
const nombreProducto = prompt("Ingresa el nombre de un producto:")
const producto = productos.find(p => p.nombre === nombreProducto)

if (producto) {
  alert(`Se encontró el producto: ${producto.nombre} con ID: ${producto.id}, precio: $${producto.precio} y Descripcion:  ${producto.descripcion}.`)
} else {
  alert(`No se encontró un producto con el nombre: ${nombreProducto}.`)
}
}

buscarProducto (productos)
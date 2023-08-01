//buscador de regalos
//creo una clase para generar los productos
class Productos {
  constructor(id, nombre, estilo, precio) {
    this.id = id;
    this.nombre = nombre;
    this.estilo = estilo;
    this.precio = precio;
  }
  obtenerPrecio() {
    console.log(`el precio del producto es $ ${this.precio} `);
  }
  mostrarEstilo() {
    console.log(`El estilo es de ${this.estilo}`);
  }

  mostrarNombre() {
    console.log(`"El nombre del producto es ${this.nombre}`);
  }
}
// dos array de productos para el buscador
const productosVerano = [
  new Productos(
    1,
     "cartera Spring", 
     "primavera/verano",
      "$15000"),
  new Productos(
    2,
     "bolso Spring", 
     "primavera/verano", 
     "$17000"),
  new Productos(
    3,
     "manta Spring",
      "primavera/verano",
       "$18000"),
  new Productos(
    4, 
    "almohadon Personalizado", 
    "primavera/verano",
     "$9000"),
     new Productos(
      5,
      "otoño/invierno",
      "libro safari",
      "$16000")
];

const productosInvierno = [
  new Productos(
    1,
     "cartera Winter",
      "otoño/invierno",
       "$17000"),
  new Productos(
    2, 
    "bolso Winter",
     "otoño/invierno",
      "$17000"),
  new Productos(
    3,
     "manta Winter",
      "otoño/invierno",
       "$18000"),
  new Productos(
    4,
     "almohadon Personalizado",
      "otoño/invierno",
       "$17000"),
  new Productos(
    5,
    "libro de la selva",
    "otoño/Verano",
    "$16000"),
  new Productos(
    6,
    "otoño/invierno",
    "libro safari",
    "$16000")
];
//nuevo array con productos verano e invierno
const arrayDeProductos = productosVerano.concat(productosInvierno);


let nombre = prompt("Ingresa tu nombre");

function saludar() {
  console.log(
    `"Hola " ${nombre} " Ingresa a continuacion los datos en el buscador de regalos y te ayudaremos a encontrar lo que estas buscando" `);
}
saludar();

//uso while para que no se pueda ingresar otra opcion
let temporada = "";
while (
  temporada !== "invierno" && temporada !== "verano" && temporada !== "otoño" && temporada !== "primavera")
   {
  temporada = prompt("Ingresa la temporada (primavera, verano, otoño o invierno)").toLowerCase();

}
//uso while para que no se pueda ingresar un valor no numerico
let edad = NaN;
while (isNaN(edad)) {
  edad = parseInt(
    prompt("Ingresa la edad de la persona a la que queres hacerle el regalo")
  );
}
//filtro por edad y estacion para indicar dos tipos de productos posibles
if (edad <= 7) {
  if (temporada == "verano" || temporada == "primavera") {
    console.log("El regalo sugerido es un libro safari o una manta spring");
  } else if (temporada == "invierno" || temporada == "otoño") {
    console.log(
      "El regalo sugerido es el libro de la selva o la manta winter"
    );
  }
} else if (edad > 7 && edad <= 15) {
  if (temporada == "verano" || temporada == "primavera") {
    console.log(
      "El regalo sugerido es un almohadón personalizado o una manta spring"
    );
  } else if (temporada == "invierno" || temporada == "otoño") {
    console.log(
      "El regalo sugerido es un almohadón personalizado o manta winter"
    );
  }
} else if (edad > 16) {
  if (temporada == "verano" || temporada == "primavera") {
    console.log("El regalo sugerido es una cartera o un bolso spring");
  } else if (temporada == "invierno" || temporada == "otoño") {
    console.log("El regalo sugerido es una cartera o bolso winter");
  }
}
//validacion del nombre del producto ingresado por el susuario en un nuevo array con mapeo de solo nombres
let productoSeleccionado = "";
const nombresProductosValidos = arrayDeProductos.map(producto => producto.nombre.toLowerCase());

while (!nombresProductosValidos.includes(productoSeleccionado)) {
  productoSeleccionado = prompt("Ingresa el nombre del producto completo y te indicaremos su precio").toLowerCase();
}
//valido el nombre del producto con la funcion de la clase obtenerPrecio para indicar el valor
const buscarPrecio = (nombreProducto) => {
  const productoEncontrado = arrayDeProductos.find(producto => producto.nombre.toLowerCase() === nombreProducto);
  if (productoEncontrado) {
    productoEncontrado.obtenerPrecio();
  } else {
    console.log("El producto ingresado no se encuentra en la lista.");
  }
};

buscarPrecio(productoSeleccionado);


prompt(
  nombre +
    "  Si queres abonar con tarjeta de credito vas a ingresar al calculador de coutas, sino, abonas en efectivo en el local"
);

// calculadora de cuotas con interes
montoDelProducto = NaN;

while (isNaN(montoDelProducto)) {
  montoDelProducto = parseFloat(prompt("Ingresa el valor del producto"));
}
const interes = 0.07;

let cuotas = NaN;
while (isNaN(cuotas)) {
  cuotas = parseInt(prompt("Ingresa el número de cuotas"));
}

const pagoIntereses = montoDelProducto * interes;
const pagoTotal = montoDelProducto + pagoIntereses;
const pagoMensual = pagoTotal / cuotas;

for (let i = 1; i <= cuotas; i++) {
  if (i <= 1) {
    console.log(
      "Vas a pagar " + cuotas + " cuotas de $ " + pagoMensual.toFixed(2)
    );
  }
}

console.log('¡¡¡Gracias por visitar Los lios de Ana!!!')
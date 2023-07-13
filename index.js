

//buscador de regalos



let nombre = prompt("Ingresa tu nombre");

function saludar(){
  return
  console.log("Hola " + nombre + " Ingresa a continuacion los datos en el buscador de regalos y te ayudaremos a encontrar lo que estas buscando");
}
 saludar()

//uso while para que no se pueda ingresar otra opcion
let estacion = "";
while (
  estacion !== "invierno" &&
  estacion !== "verano" &&
  estacion !== "otoño" &&
  estacion !== "primavera"
) {
  estacion = prompt(
    "Ingresa la estación favorita de la persona a la que queres hacerle el regalo (invierno, verano, otoño o primavera)").toLowerCase();
}
//uso while para que no se pueda ingresar un valor no numerico
let edad = NaN;
while (isNaN(edad)) {
  edad = parseInt(
    prompt("Ingresa la edad de la persona a la que queres hacerle el regalo"));
}

if (edad <= 7) {
  if (estacion == "verano" || estacion == "primavera") {
    console.log("El regalo sugerido es un libro safari o una manta spring");
  } else if (estacion == "invierno" || estacion == "otoño") {
    console.log("El regalo sugerido es el libro de la selva o las mantas invernales");
  }
} else if (edad > 7 && edad <= 15) {
  if (estacion == "verano" || estacion == "primavera") {
    console.log(
      "El regalo sugerido es un almohadón primavera o una manta de verano"
    );
  } else if (estacion == "invierno" || estacion == "otoño") {
    console.log("El regalo sugerido es un almohadón o manta con motivos invernales");
  }
} else if (edad > 16) {
  if (estacion == "verano" || estacion == "primavera") {
    console.log("El regalo sugerido es una cartera o un bolso spring");
  } else if (estacion == "invierno" || estacion == "otoño") {
    console.log("El regalo sugerido es una cartera o bolso winter");
  }
}

prompt(nombre + "  Si queres abonar con tarjeta de credito vas a ingresar al calculador de coutas, sino, abonas en efectivo en el local");

// calculadora de cuotas con interes
let montoDelProducto = NaN;

while (isNaN(montoDelProducto)) {
  montoDelProducto = parseFloat(prompt("Ingresa el monto del producto"));
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
  if (i <= 1 ) {
    console.log("Vas a pagar " + cuotas +" cuotas de $ " + pagoMensual.toFixed(2));
  }
}

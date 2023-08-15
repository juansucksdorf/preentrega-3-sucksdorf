const d = document;

const section1 = d.getElementById('mainBuscador1');
const formulario = d.createElement('form');
section1.appendChild(formulario);
const divForm = d.createElement('div');
divForm.classList = 'row mb-3';
formulario.appendChild(divForm);

const divCol1 = d.createElement('div');
divCol1.classList = 'col-sm-10';
divForm.appendChild(divCol1);

const input1 = d.createElement('input');
input1.classList = 'form-control';
input1.setAttribute('type', 'search');
divCol1.appendChild(input1);
input1.setAttribute('id', 'estacionInput');

const lebel1 = d.createElement('label');
lebel1.classList = 'col-sm-2 col-form-label';
lebel1.setAttribute('for', 'estacionInput');
lebel1.textContent = 'Estación Favorita';
divForm.appendChild(lebel1);

const divCol2 = d.createElement('div');
divCol2.classList = 'col-sm-10'; 
divForm.appendChild(divCol2);

const input2 = d.createElement('input');
input2.classList = 'form-control';
input2.setAttribute('type', 'search');
input2.setAttribute('id', 'edadInput');
divCol2.appendChild(input2);

const lebel2 = d.createElement('label');
lebel2.classList = 'col-sm-2 col-form-label';
lebel2.setAttribute('for', 'edadInput');
lebel2.textContent = 'Edad';
divForm.appendChild(lebel2);

const boton = d.createElement('button');
boton.classList = 'btn btn-primary';
boton.setAttribute('type', 'submit');
boton.textContent = 'Buscar';
formulario.appendChild(boton);
boton.setAttribute('id', 'submitButton');

const parrafo = d.getElementById('parrafoBuscador');

const seccion2 = d.getElementById('mainBuscador2');
const formulario2 = d.createElement('form');
seccion2.appendChild(formulario2);
const divForm2 = d.createElement('div');
divForm2.classList = 'row mb-3';
formulario2.appendChild(divForm2);

const divCol3 = d.createElement('div');
divCol3.classList = 'col-sm-10';
divForm2.appendChild(divCol3);

const input3 = d.createElement('input');
input3.classList = 'form-control';
input3.setAttribute('type', 'search');
input3.setAttribute('id', 'Input3');
divCol3.appendChild(input3);

const lebel3 = d.createElement('label');
lebel3.classList = 'col-sm-2 col-form-label';
lebel3.setAttribute('for', 'Input3');
lebel3.textContent = 'Regalo elegido';
divForm2.appendChild(lebel3);

const boton2 = d.createElement('button');
boton2.classList = 'btn btn-secondary';
boton2.setAttribute('type', 'submit');
boton2.textContent = 'Buscar';
formulario2.appendChild(boton2);
boton2.setAttribute('id', 'submitButton2');

const parrafo2 = d.getElementById('parrafoBuscador2');





//falta agregar esta calculadora de cuotas al html.
// calculadora de cuotas con interes
// montoDelProducto = NaN;

// while (isNaN(montoDelProducto)) {
//   montoDelProducto = parseFloat(prompt("Ingresa el valor del producto"));
// }
// const interes = 0.07;

// let cuotas = NaN;
// while (isNaN(cuotas)) {
//   //cuotas = parseInt(prompt("Ingresa el número de cuotas"));
// }

// const pagoIntereses = montoDelProducto * interes;
// const pagoTotal = montoDelProducto + pagoIntereses;
// const pagoMensual = pagoTotal / cuotas;

// for (let i = 1; i <= cuotas; i++) {
//   if (i <= 1) {
//     console.log(
//       "Vas a pagar " + cuotas + " cuotas de $ " + pagoMensual.toFixed(2)
//     );
//   }
// }

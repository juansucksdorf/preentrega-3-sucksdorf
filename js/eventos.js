//evento 1

function calcularRegalo(event) {
  event.preventDefault();

  const temporadaIngresada = input1.value.toLowerCase();
  const edadIngresada = parseInt(input2.value);

  //array con objetos de temporada y edad con propiedades para la busqueda 
  const regalos = [
    {
      temporada: "invierno",
      regalosPorEdad: [
        { edadLimite: 0, regalo: "libro de la selva o la manta winter" },
        { edadLimite: 8, regalo: "almohadón personalizado o manta winter" },
        { edadLimite: 16, regalo: "cartera winter o bolso winter" },
      ],
    },
    {
      temporada: "verano",
      regalosPorEdad: [
        { edadLimite: 0, regalo: "libro safari o una manta spring" },
        { edadLimite: 8, regalo: "almohadón personalizado o una manta spring" },
        { edadLimite: 16, regalo: "cartera spring o un bolso spring" },
      ],
    },
    {
      temporada: "primavera",
      regalosPorEdad: [
        { edadLimite: 0, regalo: "libro safari o una manta spring" },
        { edadLimite: 8, regalo: "almohadón personalizado o una manta spring" },
        { edadLimite: 16, regalo: "cartera spring o un bolso spring" },
      ],
    },
    {
      temporada: "otoño",
      regalosPorEdad: [
        { edadLimite: 0, regalo: "libro de la selva o la manta winter" },
        { edadLimite: 8, regalo: "almohadón personalizado o manta winter" },
        { edadLimite: 16, regalo: "cartera winter o bolso winter" },
      ],
    },
  ];

  const temporada = regalos.find((regalo) => regalo.temporada === temporadaIngresada);

  if (!temporada) {
    parrafo.textContent = "Por favor, ingresa una temporada válida.";
  } else if (isNaN(edadIngresada) || edadIngresada < 0) {
    parrafo.textContent = "Por favor, ingresa una edad válida.";
  } else {
    const regaloSugerido = encontrarRegaloSugerido(temporada.regalosPorEdad, edadIngresada);
    parrafo.textContent = `El regalo sugerido es ${regaloSugerido}.`;
  }
}

// Función para encontrar el regalo sugerido
function encontrarRegaloSugerido(regalosPorEdad, edadIngresada) {
  let regaloSugerido = "No se encontró un regalo sugerido para la combinación de edad y temporada.";
  
  for (const regaloPorEdad of regalosPorEdad) {
    if (edadIngresada > regaloPorEdad.edadLimite) {
      regaloSugerido = regaloPorEdad.regalo;
      break;
    }
  }

  return regaloSugerido;
}

document.addEventListener("DOMContentLoaded", function () {
  boton.addEventListener('click', calcularRegalo);
});

  



// Función de búsqueda de producto para evento 2
function buscarProducto(event) {
  event.preventDefault();

  // Mostrar un mensaje mientras se busca
  parrafo2.textContent = "Buscando el producto...";

  setTimeout(function () {
    const productoSeleccionado = input3.value.toLowerCase();
    const productoEncontrado = arrayDeProductos.find(producto => producto.nombre.toLowerCase() === productoSeleccionado);

    if (!productoSeleccionado || !productoEncontrado) {
      parrafo2.textContent = "Por favor, ingresa un producto válido.";
      return;
    }

    // Guardo el precio en el localStorage
    const precioDato = JSON.stringify({ precio: productoEncontrado.precio });
    localStorage.setItem('precioProducto', precioDato);

    // Muestro el precio desde el localStorage
    const precioString = localStorage.getItem('precioProducto');
    
    const precioObj = JSON.parse(precioString);
    const mensaje = precioObj && precioObj.precio ? `El precio del producto es $${precioObj.precio}` : "No se encontró el precio en el almacenamiento.";

    parrafo2.textContent = mensaje;

    const imagenProducto = document.getElementById('imagenProducto');
    imagenProducto.src = productoEncontrado.imagen;
    imagenProducto.style.display = 'block';
  }, 3000);
}

// Evento 2 llama a la funcion buscarProducto

document.addEventListener("DOMContentLoaded", function () {
  boton2.addEventListener('click', buscarProducto);
});


//funciones para calculadora de cuotas 

function calcularPagoMensual(cuotas, montoDelProducto) {
  const cuotasValidas = cuotas > 0 && cuotas <= 12;
  const interes = 0.07;
  const pagoIntereses = montoDelProducto * interes;
  const pagoTotal = montoDelProducto + pagoIntereses;
  return cuotasValidas ? pagoTotal / cuotas : 0;
}

// funcion para mostrar resultado 
function mostrarResultado(pagoMensual, cuotas) {
  const parrafoCalculadora = document.getElementById("parrafoCalculadora");
  parrafoCalculadora.textContent = pagoMensual > 0
    ? `Vas a pagar ${cuotas} cuotas de $${pagoMensual.toFixed(2)}`
    : "Ingresa un número válido de cuotas (hasta 12 cuotas).";
}


// Evento 3
botonCalc.addEventListener("click", function (event) {
  event.preventDefault();

  const cuotas = parseInt(input4.value);
  const precioProductoObject = JSON.parse(localStorage.getItem("precioProducto"));
  const montoDelProducto = parseFloat(precioProductoObject?.precio || 0);

  const pagoMensual = calcularPagoMensual(cuotas, montoDelProducto);
  mostrarResultado(pagoMensual, cuotas);
});

//año con date en copiright

document.addEventListener("DOMContentLoaded", function () {
  const currentYearElement = document.getElementById("currentYear");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;
});


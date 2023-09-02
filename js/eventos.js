//primer evento 
boton.addEventListener('click', function(event) {
  event.preventDefault();

  const temporadaIngresada = input1.value.toLowerCase();
  if (temporadaIngresada !== "invierno" && temporadaIngresada !== "verano" && temporadaIngresada !== "otoño" && temporadaIngresada !== "primavera") {
    parrafo.textContent = "Por favor, ingresa una temporada válida.";
  } else {
    const edadIngresada = parseInt(input2.value);
    if (isNaN(edadIngresada)) {
      parrafo.textContent = "Por favor, ingresa una edad válida.";
    } else {
      let regaloSugerido = "";
      if (edadIngresada <= 7) {
        if (temporadaIngresada === "verano" || temporadaIngresada === "primavera") {
          regaloSugerido = "libro safari o una manta spring";
        } else if (temporadaIngresada === "invierno" || temporadaIngresada === "otoño") {
          regaloSugerido = "libro de la selva o la manta winter";
        }
      } else if (edadIngresada > 7 && edadIngresada <= 15) {
        if (temporadaIngresada === "verano" || temporadaIngresada === "primavera") {
          regaloSugerido = "almohadón personalizado o una manta spring";
        } else if (temporadaIngresada === "invierno" || temporadaIngresada === "otoño") {
          regaloSugerido = "almohadón personalizado o manta winter";
        }
      } else if (edadIngresada > 16) {
        if (temporadaIngresada === "verano" || temporadaIngresada === "primavera") {
          regaloSugerido = "cartera spring o un bolso spring";
        } else if (temporadaIngresada === "invierno" || temporadaIngresada === "otoño") {
          regaloSugerido = "cartera winter o bolso winter";
        }
      }

      if (regaloSugerido) {
        parrafo.textContent = `El regalo sugerido es ${regaloSugerido}.`;
      } else {
        parrafo.textContent = "No se encontró un regalo sugerido para la combinación de edad y temporada.";
      }
    }
  }
});


//segundo evento
boton2.addEventListener('click', function(event) {
  event.preventDefault();

  const productoSeleccionado = input3.value.toLowerCase();
  const nombresProductosValidos = arrayDeProductos.map(producto => producto.nombre.toLowerCase());

  if (nombresProductosValidos.includes(productoSeleccionado)) {
    const productoEncontrado = arrayDeProductos.find(producto => producto.nombre.toLowerCase() === productoSeleccionado);

    if (productoEncontrado) {
      // Guardo el precio en el localStorage
      const precioDato = JSON.stringify({ precio: productoEncontrado.precio });
      localStorage.setItem('precioProducto', precioDato);

      // muestro el precio desde el localStorage
      const parsedprecioDato = JSON.parse(localStorage.getItem('precioProducto'));
      if (parsedprecioDato && parsedprecioDato.precio) {
        parrafo2.textContent = `El precio del producto es $ ${parsedprecioDato.precio}`;
      } else {
        parrafo2.textContent = "No se encontró el precio en el almacenamiento.";
      }
    } else {
      parrafo2.textContent = "El producto ingresado no se encuentra en la lista.";
    }
  } else {
    parrafo2.textContent = "Por favor, ingresa un producto válido.";
  }
});


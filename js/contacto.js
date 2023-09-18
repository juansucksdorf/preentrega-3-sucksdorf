//evento de contacto ingresa por formspree
const $form = document.getElementById("contactForm");
$form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  const requestOptions = {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  };

  fetch(this.action, requestOptions)
    .then((response) => {
      if (response.ok) {
        $form.reset();
        mostrarMensajeExitoso();
      } else {
        mostrarMensajeDeError();
      }
    })
    .catch((error) => {
      console.error("Error al enviar el formulario:", error);
      mostrarMensajeDeError();
    });
}

function mostrarMensajeExitoso() {
  Swal.fire({
    icon: "success",
    title: "Formulario enviado con éxito",
    text: "Gracias por contactarnos",
  });
}

function mostrarMensajeDeError() {
  Swal.fire({
    icon: "error",
    title: "Error al enviar el formulario",
    text: "Ocurrió un error al enviar el formulario",
  });
}

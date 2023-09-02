//evento de contacto ingresa por formspree
const $form = document.getElementById("contactForm");
$form.addEventListener("submit", handleSubmit);

async function handleSubmit(event) {
  event.preventDefault();

  const form = new FormData(this);
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    this.reset();
    Swal.fire({
      icon: "success",
      title: "Formulario enviado con éxito",
      text: "Gracias por contactarnos",
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Error al enviar el formulario",
      text: "Ocurrió un error al enviar el formulario",
    });
  }
}

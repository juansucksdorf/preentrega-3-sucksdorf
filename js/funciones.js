//clase para productos
class Productos {
  constructor(id, nombre, estilo, precio, imagen) {
    this.id = id;
    this.nombre = nombre;
    this.estilo = estilo;
    this.precio = precio;
    this.imagen = imagen;
  }
  obtenerPrecio() {
    localStorage.setItem('precioProducto', this.precio.toString()); 
  }
  
  
  mostrarEstilo() {
    console.log(`El estilo es de ${this.estilo}`);
  }

  mostrarNombre() {
    console.log(`"El nombre del producto es ${this.nombre}`);
  }
  mostrarId(){
    console.log(`El id del producto es ${this.id}`)
  }
}
// dos array de productos para el buscador 
const productosVerano = [
  new Productos(
    1,
     "cartera Spring", 
     "primavera/verano",
      15000,
      "../assets/bolso-10.jpg.jpeg"),
  new Productos(
    2,
     "bolso Spring", 
     "primavera/verano", 
     17000,
     "../assets/bolso-11b.jpg.jpeg"),
  new Productos(
    3,
     "manta Spring",
      "primavera/verano",
       18000,
       "../assets/manta-6.png"),
  new Productos(
    4, 
    "almohadon Personalizado", 
    "primavera/verano",
     9000,
     "../assets/almohadon-1.png"),
     new Productos(
      5,
      "libro safari",
      "primavera/verano",
      16000,
      "../assets/libro-elefante.png")
];

const productosInvierno = [
  new Productos(
    1,
     "cartera Winter",
      "otoño/invierno",
       17000,
       "../assets/cartera-otoño.png"),
  new Productos(
    2, 
    "bolso Winter",
     "otoño/invierno",
      17000,
      "../assets/bolsos-6.jpg"),
  new Productos(
    3,
     "manta Winter",
      "otoño/invierno",
       18000,
       "../assets/manta-23.png"),
  new Productos(
    4,
     "almohadon Personalizado",
      "otoño/invierno",
       17000,
       "../assets/almohadon-3.png"),
  new Productos(
    5,
    "libro de la selva",
    "otoño/Verano",
    16000,
    "../assets/libro-otoño.png"),
  
];

//nuevo array con productos verano e invierno


const arrayDeProductos = productosVerano.concat(productosInvierno);
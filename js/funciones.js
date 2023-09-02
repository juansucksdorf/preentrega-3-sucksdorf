//clase para productos
class Productos {
  constructor(id, nombre, estilo, precio) {
    this.id = id;
    this.nombre = nombre;
    this.estilo = estilo;
    this.precio = precio;
  }
  obtenerPrecio() {
    localStorage.setItem('precioProducto', this.precio); 
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
      "15000"),
  new Productos(
    2,
     "bolso Spring", 
     "primavera/verano", 
     "17000"),
  new Productos(
    3,
     "manta Spring",
      "primavera/verano",
       "18000"),
  new Productos(
    4, 
    "almohadon Personalizado", 
    "primavera/verano",
     "9000"),
     new Productos(
      5,
      "libro safari",
      "primavera/verano",
      "16000")
];

const productosInvierno = [
  new Productos(
    1,
     "cartera Winter",
      "otoño/invierno",
       "17000"),
  new Productos(
    2, 
    "bolso Winter",
     "otoño/invierno",
      "17000"),
  new Productos(
    3,
     "manta Winter",
      "otoño/invierno",
       "18000"),
  new Productos(
    4,
     "almohadon Personalizado",
      "otoño/invierno",
       "17000"),
  new Productos(
    5,
    "libro de la selva",
    "otoño/Verano",
    "16000"),
  
];

//nuevo array con productos verano e invierno


const arrayDeProductos = productosVerano.concat(productosInvierno);
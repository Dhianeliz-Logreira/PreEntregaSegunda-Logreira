let nombreLibro = prompt("Escriba alguna de las dos opciones:\n- Marina \n- Le Tempo"); 

function Libros(nombre, autor, precio) {
  this.nombre = nombre;
  this.autor = autor;
  this.precio = precio;
  this.descuento = 15;
  this.aplicarDescuento = () => {
    this.precio = this.precio - ((this.precio * this.descuento) / 100)
  }
}

function titulos (nombreLibro){
if (nombreLibro == "Marina"){
  return book1;
} else if (nombreLibro == "Le Tempo"){
  return book2;
}
}


const book1 = new Libros ("Nombre: Marina", "Autor: Carlos Ruiz", 1200);
const book2 = new Libros ("Nombre: Le Tempo", "Autor: Maria Palacios", 570); 

book1.aplicarDescuento();
console.log(book1.nombre, book1.autor, book1.precio); 
book2.aplicarDescuento(),
console.log(book2.nombre, book2.autor, book2.precio); 


//Metodo de busqueda

const livre = [
  {titulo: "Marina", precio: 1200},
  {titulo: "Le Tempo", precio: 570},
]

const resultado = livre.find(rosa=> rosa.titulo == "Marina");
console.log(resultado);
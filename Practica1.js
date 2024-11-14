//Función constructora.
function Punto(x, y) {
  // Validación de que x e y sean números, si no lo son, asignamos 0.
  this.x = typeof x === 'number' ? x : 0;
  this.y = typeof y === 'number' ? y : 0;

  // Método para cambiar las coordenadas del punto.
  this.cambiar = function (nuevoX, nuevoY) {
    this.x = typeof x === 'number' ? nuevoX : this.x;
    this.y = typeof y === 'number' ? nuevoY : this.y;
  };

  // Método para devolver copia del objeto.
  this.copia = function () {
    return new Punto(this.x, this.y);
  };
  // Método para sumar el punto actual con otro punto.
  this.suma = function (otroPunto) {
    return new Punto(this.x + otroPunto.x, this.y + otroPunto.y);
  };
}

//Pruebas de funcionamiento

//Crear un punto inicial
let punto1 = new Punto(3, 4);
console.log('Punto 1:', punto1);

//Probar cambiar método
punto1.cambiar(10, 15);
console.log('Cambiar Punto1:', punto1);

// Probar el método copia
let puntocopia = punto1.copia();
console.log('Copia de Punto 1:', puntocopia);

// Probar el método suma
let punto2 = new Punto(8, 10);
let punto3 = new Punto(5, 7);
let puntosuma = punto2.suma(punto3);
console.log('Punto suma:', puntosuma);

//Comprobar el valor por defecto cuando no es un número.
let punto7 = new Punto("a","b");
console.log(punto7);
//Añadir método al prototipo de Array
function calcularMedia(array) {
  if (array.length === 0) return 0;
  let elementos = array.length;
  let suma = array.reduce(
    (acumulador, valorActual) => acumulador + valorActual
  );
  return suma / elementos;
}

//Comprobar método.
let array1 = [1, 2, 3, 4, 5, 6, 7];
console.log('La media del array1 es igual: ' + calcularMedia(array1));

let array2 = [10, 20, 30];
console.log('La media del array2 es igual: ' + calcularMedia(array2));

console.log(calcularMedia([])); //comprobar si array vacio resultado sea 0.

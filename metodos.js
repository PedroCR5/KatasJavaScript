//! Métodos más importantes
// pop, push, shift, unshift, splice, slice, indexOf, includes, reverse

const array = [10, 20, 30, 40, 50, 60, 70, 80];

//! métodos que modifican la matriz o el array
/* console.log('antes del método pop:', array);
array.pop();

console.log('después del método pop:', array); */

//? pop() -> elimina el último elemento del array

//? push(90,100) -> inserta un nuevo elemento al final del array
array.push(90, 100, 110)

//? reverse() -> da la vuelta al array

//? shift() -> elimina el primer elemento del array
array.shift();
console.log('antes del método indexOf:', array);

//? sort() -> ordena los elementos en nuestro array
array.sort((a, b) => a - b);

//? unshift(90,100) -> inserta un nuevo elemento al principio del array
array.unshift(90, 100, 110)

array.sort();

//? splice() -> eliminar, sustituir o añadir elementos a un array donde yo quiera

//* [9, 50, 40, 30, 20, 10]
nuevoArray = [9, 50, 40, 30, 20, 10];
nuevoArray.splice(2, 3, "eliminados");
console.log(nuevoArray);

//! métodos que NO modifican la matriz o el array

//? indexOf -> devuelve la PRIMERA posición del elemento encontrado, si no, devuelve -1

/* console.log('antes del método indexOf:', array);
console.log(array.indexOf(50));

console.log('después del método indexOf:', array); */

//? lastIndexOf -> devuelve la ÚLTIMA posición del elemento encontrado, si no, devuelve -1


//? concat -> concatena dos arrays
/* console.log(array.concat(nuevoArray));
 */
//? toString -> convertirá el array en un string
console.log(array.toString());


//? includes -> indicar si algo está incluido en el array que comrpueba. Devuelve true o false


//? slice -> como el splice pero SIN modificar el array, este sólo puede recibir como mucho 2 parámetros
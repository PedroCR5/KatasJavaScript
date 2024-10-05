// String


let abrigo = true;
let string = "akfñafjlñshdfñlshsfhdñlshfdñlsdjlñs";
let frio = true;

/* console.log(abrigo === frio);
 */
// dirección = 393947809237420sdfwewr
let lista = [1, 4, 6, 8];
// dirección = 8432980928342sdffsfwt
let list2 = [1, 4, 6, 8];
/* console.log(lista === list2);
 */
let variable = frio;
variable = false;

/* console.log(variable);
console.log(frio); */


let importante = `IMPORTANTE`;
/* console.log(importante.length);
console.log(importante[importante.length - 1]);

console.log(importante.includes(`k`)); */
/* console.log(importante.slice(importante.length - 3, importante.length)); */
//nuevo string con lo extraido del anterior

let word = "Jose";

function includes(palabra, pregunta) {
  let incluye = false;
  for (let i = 0; i < palabra.length; i++) {
    if (palabra[i] === pregunta) {
      incluye = true;
    }
  }
  return incluye;
}

console.log(includes(word, "e"));
// hicimos la lógica como el includes

//! Number
let number1 = 23;
let number2 = -122;
let number3 = 23.23;

//Math

console.log(Math.abs(number2));
console.log(Math.floor(number3));
console.log(Math.max(1, 25, 358, 22, 346));
console.log(Math.min(1, 25, 358, 22, 346));
console.log(Math.pow(2, 4));
//! importante random, entre 0 y 1
console.log(Math.random());
console.log(Math.floor(Math.random() * 10));

// metodo util .toFixed(2). Pasa a string el nº y recorrta decimales
console.log(((Math.random() * 10).toFixed(4)));

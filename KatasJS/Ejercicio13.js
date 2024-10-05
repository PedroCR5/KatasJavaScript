//!Buscador de nombres: Crea una función que reciba por parámetro un array y el valor que desea comprobar que existe dentro de dicho array - comprueba si existe el elemento, en caso que existan nos devuelve un true y la posición de dicho elemento y por la contra un false. Puedes usar este array para probar tu función:
const nameFinder = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
function finderName(words, word) {
  let wordIncluded = false;
  let positionOfWord = false;
  words.forEach(element => {
    if (element === word) {
      wordIncluded = true;
      positionOfWord = words.indexOf(word);
    }
  });
  return positionOfWord;
}
let nameToCheck = 'Logan';
let positionOfName = finderName(nameFinder, nameToCheck);
if (positionOfName === false) {
  console.log(`No existe la palabra dentro del string`)
} else {
  console.log(`La palabra si está dentro del string, en la posición ${positionOfName}.`);
}


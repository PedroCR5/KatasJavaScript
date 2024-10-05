//!Mixed For e includes: Usa un bucle for para recorrer todos los juguetes y elimina los que incluyan la palabra gato. Recuerda que puedes usar la función .includes() para comprobarlo. Puedes usar este array:
const toys = [
  { id: 5, name: 'Buzz MyYear' },
  { id: 11, name: 'Action Woman' },
  { id: 23, name: 'Barbie Man' },
  { id: 40, name: 'El gato con Guantes' },
  { id: 40, name: 'El gato felix' }
]
let wordToCheck = "gato";
//console.log(toys);
function includeWord(array, word) {
  for (i = 0; i < array.length; i++) {
    let checkWord = array[i].name;
    if (checkWord.includes(word)) {
      //console.log(checkWord)
      array.splice(i, 1);
      i--;
    }
  }
}
includeWord(toys, wordToCheck);
console.log(toys);
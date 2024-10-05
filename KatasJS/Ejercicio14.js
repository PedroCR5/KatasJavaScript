//!Contador de repeticiones: Crea una función que nos devuelva el número de veces que se repite cada una de las palabras que lo conforma. Puedes usar este array para probar tu función:
const counterWords = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'upgrade',
  'code'
];

function repeatCounter(wordsArray) {
  const wordsChecked = [];
  for (i = 0; i < wordsArray.length; i++) {
    let counter = 0;
    for (j = 0; j < wordsArray.length; j++) {
      if (wordsArray[i] === wordsArray[j]) {
        counter = counter + 1;
      }
    }
    if (wordsChecked.includes(wordsArray[i]) === false) {
      console.log(`La palabra ${wordsArray[i]}, se repite ${counter} veces.`)
      wordsChecked.push(wordsArray[i]);
    }
  }
}

repeatCounter(counterWords);

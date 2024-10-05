//!Usa includes: Haz un bucle y muestra por consola todos aquellos valores del array que incluyan la palabra "Camiseta". Usa la función .includes de javascript.
const products = ['Camiseta de Pokemon', 'Pantalón coquinero', 'Gorra de gansta', 'Camiseta de Basket', 'Cinrurón de Orión', 'AC/DC Camiseta'];


function includeWord(wordsArray, wordToCheck) {
  for (i = 0; i < wordsArray.length; i++) {
    if (wordsArray[i].includes(wordToCheck)) {
      console.log(wordsArray[i])
    }
  }
}
let wordToCheck = "Camiseta";
includeWord(products, wordToCheck);
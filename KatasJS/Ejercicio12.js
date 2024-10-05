//!Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, en caso que existan los elimina para retornar un array sin los elementos duplicados. Puedes usar este array para probar tu función:

//pista(cuando eliminamos algo de un array, su longitud se verá afectada)

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];
function removeDuplicates(words) {
  for (i = 0; i < words.length; i++) {
    let firstWord = words[i]
    let eliminateWords = false;
    for (j = i + 1; j < words.length; j++) {
      if (firstWord === words[j]) {
        words.splice(j, 1);
        eliminateWords = true;
      }
    }
    if (eliminateWords === true) {
      words.splice(i, 1);
    }
  }
  return words;
}
let finalWords = removeDuplicates(duplicates);
console.log(`El string no duplicado es ${finalWords}.`);
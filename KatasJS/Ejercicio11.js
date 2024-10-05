//!Calcular promedio de strings: Crea una función que reciba por parámetro un array y cuando es un valor number lo sume y de lo contrario cuente la longitud del string y lo sume. Puedes usar este array para probar tu función:
//pista (typeof)
const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(words) {
  let totalSum = 0;
  words.forEach(element => {
    if (typeof element === "number") {
      totalSum = totalSum + element;
      //console.log(totalSum);
    } else if (typeof element === "string") {
      totalSum = totalSum + element.length;
      //console.log(totalSum);

    }
  });
  return totalSum / words.length;
}

let totalSumWords = Math.trunc(averageWord(mixedElements));
console.log(`El promedio de longitud de strings es de ${totalSumWords}.`);
const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(numbers) {
  let sumNumbers = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i];
  }
  return sumNumbers / numbers.length;
}
let totalAverage = Math.trunc(average(numbers));
console.log(`El promedio de los números es ${totalAverage}.`);
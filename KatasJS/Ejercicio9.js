const numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(numbers) {
  let sumNumbers = numbers[0];
  for (i = 1; i < numbers.length; i++) {
    sumNumbers = sumNumbers + numbers[i];
  }
  return sumNumbers;
}
let totalSum = sumAll(numbers);
console.log(`La suma total es ${totalSum}.`);
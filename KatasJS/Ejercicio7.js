function sum(numberOne, numberTwo) {
  if (numberOne >= numberTwo) {
    return numberOne;
  } else {
    return numberTwo;
  }
}
numberOne = 10;
numberTwo = 20;
let bigNumber = sum(numberOne, numberTwo);
console.log(`El número mayor es ${bigNumber}`);
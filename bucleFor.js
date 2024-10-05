// bucle for of
const numbers = [12, 25, 36, 45, 112, 2, 5];

for (i = 0; i < numbers.length; i++) {
  let number = numbers[i];
  //console.log(number);
}

for (const number of numbers) {
  //console.log(number);
}

//for in. Recorremos un objeto
const objeto = {
  propiedad1: "djfñlsjfñsd",
  propiedad2: "dskdfopsjell"
}

const keys = Object.keys(objeto);//esto crea un array con las claves de mi objeto=>['propiedad1', 'propiedad2'  ]

//console.log();

for (const clave in objeto) {
  //console.log(objeto[clave]);

}

//! forEach
numbers.forEach((number) => {
  //console.log(number);
});


//! while

/* while (5 > 4) {
  console.log("Me estoy ejecutando");
} */
let numero = 0;
while (numero < 10) {
  console.log("Me estoy ejecutando");
  console.log(numero);
  numero = numero + 2;
}


//! do...while
//primero hacemos y luego miramos para seguir.


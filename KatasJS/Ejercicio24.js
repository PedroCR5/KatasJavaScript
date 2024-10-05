//!Usa un bucle para sumar el total de las ventas (sellCount) de todos los productos.
const products = [
  { name: "Funko Dr. Strange", sellCount: 10 },
  { name: "Mochila de protones: Ghostbusters", sellCount: 302 },
  { name: "Sable laser FX", sellCount: 23 },
  { name: "Varita de Voldemort", sellCount: 6 },
];

let sellTotal = 0;
for (const element of products) {
  sellTotal = sellTotal + element.sellCount;
}
console.log(`El total de las ventas es de ${sellTotal}€.`);

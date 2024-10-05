//!Usa un bucle para crear 3 arrays de peliculas filtrados por categorias. Pelicula pequeña, menos de 100 minutos, pelicula mediana, mas de 100 minutos y menos de 200 y pelicula grande, mas de 200 minutos. Imprime cada array en por consola.
const movies = [
  { name: "Titan A.E.", durationInMinutes: 130 },
  { name: "Nightmare before Christmas", durationInMinutes: 225 },
  { name: "Inception", durationInMinutes: 165 },
  { name: "The Lord of the Rings", durationInMinutes: 967 },
  { name: "Star Wars: A New Hope", durationInMinutes: 214 },
  { name: "Terminator", durationInMinutes: 140 },
];

let smallMovies = [];
let mediumMovies = [];
let bigMovies = [];

for (const element of movies) {
  if (element.durationInMinutes < 100) {
    smallMovies.push(element);
  } else if (element.durationInMinutes > 200) {
    bigMovies.push(element);
  } else {
    mediumMovies.push(element);

  }
}
console.log(`Las películas de menos de 100 minutos son:`);
console.log(smallMovies);
console.log(`Las películas de más de 100 minutos y menos de 200 son:`);
console.log(mediumMovies);
console.log(`Las películas de más de 200 minutos son:`);
console.log(bigMovies);

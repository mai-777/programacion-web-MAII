//metodo push

const frutas = ["banana", "frutilla"];
const nuevaFruta = "pera";

frutas.push(nuevaFruta);

console.log(frutas);

//metodo pop

const frutas2 = ["banana", "frutilla"];
const ultimaFruta = frutas2.pop();

console.log(frutas2);
console.log(ultimaFruta);

//metodo shift

const frutas3 = ["banana", "frutilla"];
const primeraFruta = frutas2.shift();

console.log(frutas3);
console.log(primeraFruta);

//unshift

const frutas4 = ["banana", "frutilla"];
const nuevaFruta4 = "manzana";

frutas4.unshift(nuevaFruta4);

console.log(frutas4);

//concatenar

//opcion 1
const numbers = [1, 2, 3];
const numbers2 = [4, 5];
const allNumbers = numbers.concat(numbers2);
console.log(allNumbers); // [1, 2, 3, 4, 5]

//opcion 2
const numberss = [1, 2, 3];
const numberss2 = [4, 5];
const allNumberss = [...numberss, ...numberss2];
console.log(allNumberss); // [1, 2, 3, 4, 5]

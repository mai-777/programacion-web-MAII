const numeros = [5, -10, -2, -25, -7, 1];
const numeros2 = [];
function sortAbsoluteNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    let absValor = Math.abs(numbers[i]);
    numeros2.push(absValor);
  }
  numeros2.sort(function (a, b) {
    return a - b;
  });
  return numeros2;
}

console.log(sortAbsoluteNumbers(numeros));

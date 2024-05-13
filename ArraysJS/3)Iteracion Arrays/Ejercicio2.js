const lista = [1, 2, 4, 5, 5, 6, 6, 7];

function sumarPares(numeros) {
  let suma = 0;
  let i = 0;
  while (i < numeros.length) {
    if (numeros[i] % 2 == 0) {
      suma = suma + numeros[i];
    }
    i++;
  }
  return suma;
}
sumaTotal = sumarPares(lista);
console.log(sumaTotal);

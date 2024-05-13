const lista = [1, 2, 4, 5, 5, 6, 6, 7];

function sumarPares(numeros) {
  let suma = 0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 == 0) {
      suma = suma + numeros[i];
    }
  }
  return suma;
}
sumaTotal = sumarPares(lista);
console.log(sumaTotal);

//Las funciones siempre deben poseer un valor de retorno (return).
function number1() {
  const number1 = document.getElementById("number1").value;
  return parseInt(number1);
}

function number2() {
  const number2 = document.getElementById("number2").value;
  return parseInt(number2);
}

function calcular() {
  let resultado = number1() + number2(); //Para ejecutar una funcion al final debemos poner los parentesis.
  console.log(resultado);
  document.getElementById("resultado").textContent = resultado;
}

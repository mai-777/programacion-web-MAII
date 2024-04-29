//Declarar funciones

//Funcion tradicional
/*
function myFunction() {
    return
}
*/

//Funcion flecha o arrow function
/*
const myFunction = () => {

} 
*/

let contador = 0;

//Dato importante: Siempre los nombres de las funciones siguen la nomenclaclura

function incrementarNumero() {
  //let number = document.getElementById("number").textContent;
  contador = contador + 1;

  document.getElementById("number").textContent = contador;
}

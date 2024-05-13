const termA = ["hola", "amiga", "migaja", "cama"];
const notermA = ["hola", "arbol", "ella", "parque", "cubo"];

function terminanEnA(words) {
  const palabrasQueTerminanEnA = words.every((word) => word.endsWith("a"));
  return palabrasQueTerminanEnA;
}

console.log(terminanEnA(notermA));

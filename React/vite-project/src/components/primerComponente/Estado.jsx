//Hooks -> useState
import { useEffect, useState } from "react";

//camelcase es la amnera de escribir en la cual cada parlabra nueva arranca con Mayuscula

//

export const Estado = () => {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  //El useEfect se va a actualizar la cantidad de veces que las dependencias se actualicen
  //Si no le pasan dependencias se ejecutara solo al principio de la app en el primer render
  //Si no se le pasa el array de dependencias siempre se va a ejecutar
  useEffect(() => {
    console.log("El contador se ha actualizado");
  }, [contador]);

  const arrayPersonajes = [
    {
      name: "Rick",
      lastName: "Sanchez",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
    },
    {
      name: "Morty",
      lastName: "Smith",
      planet: "Earth",
      image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
    },
  ];

  return (
    <>
      <div class="contenedor">
        {
          //Cuando despues de la funcion flecha hay parentesis significa que el return es implicito.
          arrayPersonajes.map((personaje, i) => (
            <>
              <div key={i} class="tarjeta">
                <h2>
                  FullName: {personaje.name} {personaje.lastName}
                </h2>
                <p>Planet: {personaje.planet}</p>
                <img class="foto" src={personaje.image} alt="description" />
              </div>
            </>
          ))
        }
      </div>
      <button onClick={handleClick}>Aumentar </button>
      <p>{contador}</p>
    </>
  );
};

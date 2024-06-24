import { useEffect } from "react";
import { useState } from "react";

export default function Api() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((fetchedData) => setData(fetchedData.results));
  }, []);

  return (
    <>
      {!data ? (
        <> Loading... </>
      ) : (
        <div className="contenedorRyM">
          {data.map((personaje) => (
            <div key={personaje.id} className="tarjetaRyM">
              <img className="foto" src={personaje.image} alt="description" />
              <p>
                Nombre Completo: {personaje.name} {personaje.lastName}
              </p>
              <p>Estado: {personaje.status}</p>
              <p>Especie: {personaje.species}</p>
              <p>Genero: {personaje.gender}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

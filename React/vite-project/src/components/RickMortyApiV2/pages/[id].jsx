import { useEffect } from "react";
import { useState } from "react";
import { useRouter } from "next/router";
import { Link } from "next/link";

export default function ApiV2() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/[id]")
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
                {personaje.name} {personaje.lastName} - {personaje.gender} -{" "}
                {personaje.gender}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

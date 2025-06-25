import { useState, useEffec } from "react";

export function RickMorty() {
  const [character, setCharacters] = useState([]);

  // useEffect va a ejecutar el codigo que se encuentra
  // dentro, tantas veces como se actualizan sus dependencias
  // si no hay dependencias se ejecuta solo antes del primer
  // renderizado

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((data) => data.json())
      .then((response) => setCharacters(response.results));
  }, []);

  return (
    <>
      {character ? (
        character.map((item, index) => <p>{item.name}</p>)
      ) : (
        <> cargando... </>
      )}
    </>
  );
}

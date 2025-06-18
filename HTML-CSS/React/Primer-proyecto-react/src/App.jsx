import "./App.css";
import Pepito from "./components/usuario/Usuario";
import { Proveedor } from "./components/proveedor/Proveedor";
import { useEffect, useState } from "react";

function App() {
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
      hola mundo
      <button>hola soy lionK</button>
      <Pepito />
      <Proveedor name={"Santi-Guapo"} />
    </>
  );
}

export default App;

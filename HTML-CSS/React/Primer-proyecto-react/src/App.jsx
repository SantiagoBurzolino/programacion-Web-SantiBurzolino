import { useState } from "react";
import "./App.css";
import { Ejercicio1 } from "./components/Ejercicios/ejercicio 1";
import { Persona } from "./components/Context Personas/Persona";

function App() {
  const [nombre, setNombre] = useState("");

  const handleClick = () => {
    console.log(nombre);
  };

  const handleInputChange = (event) => {
    // en los parentesis se captura el evento
    setNombre(event.target.value); // event.target.value sirve para poder utilizarlo
  };
  return (
    <>
      <input
        type="text"
        placeholder="Escribe tu nombre"
        onChange={handleInputChange}
        value={nombre}
      />
      <button onClick={handleClick}>Mostrar</button>
      {nombre && <h2>{nombre}</h2>}

      {nombre === "" ? <>hola</> : <>chau</>}
      <Ejercicio1 />
      <Persona nombre={"pepito"}/>
    </>
  );
}

export default App;

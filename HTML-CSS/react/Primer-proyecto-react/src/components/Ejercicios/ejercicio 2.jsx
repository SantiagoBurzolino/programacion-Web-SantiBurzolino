import { useState } from "react";

export function Ejercicio2() {
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
    </>
  );
}

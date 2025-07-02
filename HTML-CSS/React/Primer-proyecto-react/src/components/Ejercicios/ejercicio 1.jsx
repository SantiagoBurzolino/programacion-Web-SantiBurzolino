import { useState } from "react";

export function Ejercicio1() {
  const [contador, setContador] = useState(0);

  const sumar = () => setContador(contador + 1);

  const restar = () => setContador(contador - 1);

  return (
    <>
      <h2>Ejercicio1: {contador}</h2>
      <button onClick={sumar}>Sumar</button>

      <button onClick={restar}>Restar</button>
    </>
  );
}

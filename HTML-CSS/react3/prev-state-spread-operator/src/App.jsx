import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });
  //const [nums, setNums] = useState(1);

  //Spread Operator
  function myFuction() {
    //setNum([...num, 7]);

    setNum((prevNum) => {
      const ultimoNumero = prevNum[prevNum.length - 1];
      return [...num, ultimoNumero + 1];
    });
  }

  //function agregar() {
  //  setNum(() => {});
  //}

  function agregarPropiedad() {
    const agregado = { ...persona, ciudad: "Buenos Aires" };

    setPersona(agregado);
    console.log(persona);
  }

  //tarea hacer que el setNum agregue numeros consecutivos. -> 3 puntos

  //Agregar una propiedad al objeto persona usando operator -> 4 puntos

  //
  return (
    <>
      <div>
        {num.map((item, index) => (
          <p>{item}</p>
        ))}
        <button onClick={agregarPropiedad}>Agregar numero</button>
      </div>
    </>
  );
}

export default App;

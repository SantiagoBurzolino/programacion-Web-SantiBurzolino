import { useState } from "react";
import "./App.css";

function App() {
  const [num, setNum] = useState([1, 2, 3, 4]);
  const [persona, setPersona] = useState({ nombre: "Pepito", edad: 30 });
  //const [nums, setNums] = useState(1);

  //Spread Operator
  function myFuction() {
    //setNum([...num, 7]);

    function myFuction() {
      setNum((prevNum) => {
        const ultimoNumero = prevNum[prevNum.length - 1];
        return [...prevNum, ultimoNumero + 1];
      });
    }

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

  function cambiarNombre() {
    const nuevaPersona = { ...persona, nombre: "Luis" };
    setPersona(nuevaPersona);
    console.log(nuevaPersona);
  }
  //tarea hacer que el setNum agregue numeros consecutivos. -> 3 puntos

  //Agregar una propiedad al objeto persona usando operator -> 4 puntos

  //Partiendo de {nombre: "pepito", edad: 30}, cambia solo el nombre a "luis" usando spread operator
  return (
    <>
      <div>
        {num.map((item, index) => (
          <p>{item}</p>
        ))}
        <button onClick={myFuction}>Agregar numero</button>
        <button onClick={cambiarNombre}>Cambiar nombre</button>
        <button onClick={agregarPropiedad}>agregar Propiedad</button>
      </div>
    </>
  );
}

export default App;

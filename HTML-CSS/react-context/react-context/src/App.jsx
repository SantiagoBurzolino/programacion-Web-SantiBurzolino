import { useState } from 'react';
import './App.css'
import { Hijo1 } from "./components/hijo1"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hijo1 nombre={"Pepito"}/>
    </>
  );
}

export default App

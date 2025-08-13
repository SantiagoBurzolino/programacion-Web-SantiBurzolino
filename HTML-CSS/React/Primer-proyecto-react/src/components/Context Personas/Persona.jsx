import { Persona2 } from "./Persona2";

export function Persona({ nombre }){
    return (
        <>
            <h3>Este es el componente</h3>
            <div>Hola {nombre}</div>
            <Persona2/>
        </>
    );
}
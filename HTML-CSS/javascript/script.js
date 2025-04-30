var miVariable = "contenido de la variable";//no se usa

//let -> solamente vive en el scope declarado o
// en sus hijos
let miVariable2 = "pueden ser re-escritos sus valores";// podemos poner lo que queramos y nos guste
miVariable2 = 9; //reasignacion del valor

//const -> variable constante no son reasignables
//los valores
const miVariable3 = 10;

/* tipos de datos */
const text = "string"
const numeros = 2 //number
const booleanos = true //boolean
//undefined -> es el valor no definido
//null -> vacio

//operadores 

//aritmeticos: son todos los de matematica + - / % *
//comparacion:
// == doble igual compara el valor del dato // doble igual con navarro
// === triple igual compara el valor y el tipo de dato // triple igual con fede 
// != distinto el valor  !== distinto el valor y tipo // con fede el !==
// > < >= <= mayor menor, mayo o igual, menor o igual

//condicionales
//if
const edad = 20
if(edad >18){
    console.log("sos mayor de edad");//mostrar por consola
    //es el print de python
}else{
    console.log("sos menor de edad");
}

//switch
const dia = 1

switch(dia){
    case 1: console.log("dia lunes"); break
    case 2: console.log("dia martes"); break
    default: console.log("dia no registrado")
}


//funciones
//declaracion funcion clasica
function saludar(nombre){
    return `hola${nombre}`
}
console.log(saludar(" Santi"));


//arrow function
//return explicito
const saludarExplicito = (nombre) => {return `hola ${nombre}`;};

//return implicito
const saludo = (nombre) => `hola ${nombre}`;
//si el return implicito tiene mas de una linea va a estar
//envuelto en parentesis

//Arreglos o arrays (listas de python)
const miArreglo = [1,2, "pepito", true]; //dentro de las comillas podes poner lo que quieras
console.log(miArreglo[2])



const miObjeto = {
    clave: "valor",
    nombre: "Santiago",
    edad: 18,
};
console.log(miObjeto.nombre);


//iteramos una lista con for
for(let i=0; i < miArreglo.length; i++){
    console.log(miArreglo[i])//imprimi en pantalla el arreglo
    //con su posicion
}

const arreglo = [1,2,3]
//objeto como un diccionario de python
//compuesto por clave y valor
const objeto = {
    name: "Messi",
    age: "36"
}
console.log

console.log(arreglo[0]);

console.log("edad", objeto.age);

//metodos de arreglos
//lenght -> longitud del arreglo

const longitud = arreglo.length;
console.log(longitud);

//push(valor) -> Agrega un elemento al final
// equivalente al append de python
arreglo.push("Nicolas");
console.log("cadena",arreglo);

//pop() elimina el ultimo elemento de un arreglo
//si queremos lo podemos guardar en una variable
const ultimo = arreglo.pop();
console.log("ultimo", ultimo);

//shift() elimina el primer valor de un arreglo,
//tambien lo guarda
const primero = arreglo.shift();
console.log(primero);


//unshift(valor) Agrega un elemento al principio del arreglo
arreglo.unshift("santi");
console.log(arreglo);

//forEach
// SOLO RECORRE, no guarda los valores en ningun lado
arreglo.forEach( (item, index, arregloEntero) => {
    console.log('index',index, 'elemento', item, 'arreglo Completo', arregloEntero );

});


//map recorre el arreglo, lo modifica con una funcion
// y nos devuelve uno nuevo
const nuevoArreglo = arreglo.map((item, index) =>{
    const num = 2;
    console.log(index, "item", item);
    return (item += num);     
});

console.log("nuevo arreglo", nuevoArreglo);

//filter Crea un nuevo array a partir de los elementos que 
// cumplan la condicion

const arregloNum = [2,3,4,5,6];
const pares = arregloNum.filter((item) => item % 2 === 0);

console.log(pares);
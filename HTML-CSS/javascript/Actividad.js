
const numero = 1    //prompt("ingrese un numero del -3 al 3: ")
if(numero >0){
    console.log("Mayor");//mostrar por consola
    //es el print de python
 
    
}else if(numero ===0){
    console.log("Cero");

}else{
    console.log("Menor");
}




//Actividad 2



let suma = 0
const numeros = [1,2,3,4,5,6,7,8,9,10]

for (let i = 1; i <= 10; i++) {
    if(numeros[i] % 2 === 0){
         suma += numeros[i]
       // console.log(`${numeros[i]}`)
    }
    
}
console.log(`Números: ${suma}`)

//for (let numeros = 2; numeros <= 10; numeros++) {
  //  if(Numpar)
    //    suma+=numeros
    //console.log(`Número: ${numeros}`)
//}

let resultado = 0
const numeros2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]

for (let i = 0; i <= numeros2.length; i++) {
    if(numeros2[i] % 3 === 0 && numeros2[i] % 5 !== 0){ 
        resultado += numeros2[i]

       // console.log(`${numeros[i]}`)
    }
    
}
console.log(`Números: ${resultado}`)
const button = document.getElementById("boton");
let contador = 0;
//setTimeout

//funcion que recibe por parametros dos valores
//recibe una funcion y recibe el tiempo que va a tardar en ejecutarse

//setTimeout(()=>{}); // funcion en flecha

//setTimeout(function(){}); //funcion en code

button.addEventListener("click", () => {
  setTimeout(function () {
    alert("hola fui clickeado hace 2 segundos");
  }, 2000); //milisegundos
});

//setInterval()
//ejecutar el codigo cada n cantidad de tiempo

/*  setInterval(() => {
    contador++;
    console.log(contador);
  }, 1000);
*/

//asincronia
//peticion a una api
//metodos: get, post, put, delete

//fetch
fetch("https://rickandmortyapi.com/api/character")
  .then((data) => data.json()) //siempre se manipulara
  .then((response) => console.log("response", response.results));

//async await
//funcion flecha asincrona
const asyncFunction = async () => {
  //try catch = intenta ejecutar el hach
  try {
    const response = await fetch("https://rickandmortyapi.com/api/character/2");
    const data = await response.json();
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
};
asyncFunction(); // para ejecutar una funcion debemos llamala
// y por parentesis y ; al final

// funcion regular asincrona
async function asyncFunc() {}

/*function sumar() {
  var miVariable = 0;
  console.log(miVariable, miVariable2);
  let miVariable2 = "Santi";
}

console.log(miVariable, miVariable2);

sumar();
*/

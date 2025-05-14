
let titulo = document.getElementById('titulo');
 console.log(titulo);
 console.log(titulo.textContent, titulo.innerText);

 titulo.textContent = 'Ejercicios'

//Eventos(addEventListener, onClick, onChange)
let boton = document.getElementById('boton')

boton.addEventListener('click', function(){
 let container = document.getElementById("container");
 let parrafo = document.createElement("p");

 let tarea = document.getElementById("inputValue").value;
 parrafo.classList.add('custom');
 parrafo.textContent = "Esta es la tarea creada";
 container.append(tarea);
});

// Obtener el elemento input por su ID
// const inputElement = document.getElementById("miInput").value;



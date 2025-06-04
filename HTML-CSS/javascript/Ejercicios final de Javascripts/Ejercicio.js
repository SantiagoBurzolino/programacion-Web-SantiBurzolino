const user = "robin";
const pass = "hood";

const button = document.getElementById("boton");
const sesion = document.getElementById("session");

button.addEventListener("click", () => {
  const usuario_Input = document.getElementById("usuario").value;
  const contraseña_Input = document.getElementById("contrasena").value;

  console.log("hola");

  if (usuario_Input.trim() === "" || contraseña_Input.trim() === "") {
    alert("ingresa las credenciales.");

    return;
  }
  if (usuario_Input === user && contraseña_Input === pass) {
    localStorage.setItem("session", true);
    alert("iniciaste sesion");
  } else {
    alert("la contraseña o user son incorrectas");
  }

  const gettedsesion = localStorage.getItem("session");

  if (gettedsesion) {
    console.log("estas ready");
  }
  async function obtenerDatos() {
    try {
      let response = await fetch("https://jsonplaceholder.typicode.com/users");
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error("Error:", error);
    }
  }
});

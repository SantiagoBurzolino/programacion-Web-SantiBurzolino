//Actividad 1

const inventory = []

inventory.push ({ nombre: "Auriculares", precio: 1500, categoria: "Electrónica" });
inventory.push ({ nombre: "Celulares", precio: 3000, categoria: "Electrónica" });
inventory.push ({ nombre: "Parlante", precio: 1000, categoria: "Electrónica" });
inventory.push ({ nombre: "Cargadores", precio: 750, categoria: "Electrónica" });


 inventory.forEach( (inventoryElement) => {
    console.log(inventoryElement) 
});

const elementFilter = inventory.filter((item) => item.categoria === "Electrónica");

console.log(elementFilter);



const inventario = inventory.map((item)=> {return item.nombre })

console.log(inventario)




//actividad 2

const peliculas = []

peliculas.push({titulo: "omajedon"})
const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const precioCiudad = new Array(500,400,300,200);
const dineroDisponible = 20;

let i=0;
while (precioCiudad[i] > dineroDisponible && i < ciudadesDisponibles.length) {
    i++;  
}
if (i == ciudadesDisponibles.length) {
    console.log("No puedes comprar el pasaje");
}else{
    console.log("Puedes comprar el pasaje para: " + ciudadesDisponibles[i]);
}

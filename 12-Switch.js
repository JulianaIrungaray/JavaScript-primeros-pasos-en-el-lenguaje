const ciudadesDisponibles = new Array("Bogotá","Lima","Santiago","Montevideo");
const ciudadDestino= "Bogotá";

let valorPasaje= 0;
console.log(`Verificando pasajes para ${ciudadDestino}`);

if (ciudadesDisponibles.indexOf(ciudadDestino) > -1){
 // if (ciudadDestino == "Bogotá"){   CONDICION CON IF
    //     valorPasaje = 500;
    // }else if (ciudadDestino == "Lima"){
    //         valorPasaje = 400;
    // }else if (ciudadDestino == "Santiago"){
    //     valorPasaje = 300;
    // }else if (ciudadDestino == "Montevideo"){
    //     valorPasaje = 200;
    // }

    switch(ciudadDestino){  //CON SWITCH: sirve para ahorrar código
        case "Bogotá": 
            valorPasaje=500;
            break;
        case "Lima": 
            valorPasaje=400;
            break;
        case "Santiago": 
            valorPasaje=300;
            break;
        case "Montevideo": 
            valorPasaje=200;
            break;       
        default:
            console.log(`Ciudad no disponible para viajar`);
            break;
    }
    if (valorPasaje > 0)
        console.log(`El valor del pasaje es: ${valorPasaje}`);
}
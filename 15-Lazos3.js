const dineroDisponible = 210;
const datos = [ //Lista de mapas

    {
        'ciudad':'Bogotá',
        'precio':500
    },
    {
        'ciudad':'Lima',
        'precio':400
    },
    {
        'ciudad':'Santiago',
        'precio':400
    },
    {
        'ciudad':'Montevideo',
        'precio':200
    }
];
//FOR
let ciudadSeleccionada = '';

for (let i = 0; i < datos.length; i++) {

    if (datos[i].precio <= dineroDisponible){
        ciudadSeleccionada = datos[i].ciudad;
        break;
    } 
    
}

if (ciudadSeleccionada == '') 
    console.log("No puedes comprar el pasaje");
else
    console.log("Puedes comprar el pasaje para: " + ciudadSeleccionada);


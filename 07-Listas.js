const cuidades= new Array("uno","dos","tres");
console.log(cuidades);

const paises= new Array("uno","dos","tres");
console.log(paises);

//agregar nuevo elemento a una lista con PUSH al final:
{
    paises.push('cuatro');
    console.log(paises);
}

//agregar nuevo elemento a una lista con PUSH al inicio:
{
    paises.unshift('cero');
    console.log(paises);
}

//Primer posición
console.log(paises[0]);

//Función Splice: quitar elementos
paises.slice(1,2,'seis');
console.log(paises);


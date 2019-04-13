//Alcance global se puede acceder desde cualquier funcion
var nombre = 'David';

//Name alcance local, sólo se accede desde la función
function imprimirEnMayusculas(nombre) {
    var nombre = nombre.toUpperCase();
    console.log('Variable de alcance local ', nombre);
}

imprimirEnMayusculas(nombre);

console.log('Variable de alcance global: ', window.nombre);

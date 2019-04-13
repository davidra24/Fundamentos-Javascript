var david = {
    'nombre': 'David', 
    'apellido': 'Ramirez',
    'edad': 23
};

var sasha = {
    'nombre': 'Sasha', 
    'apellido': 'Lifszyc',
    'edad': 28
}

function imprimirEnMayusculas(persona) {
    var nombre = persona.nombre.toUpperCase();
    console.log('Variable de alcance local ', nombre);
}

function imprimirNombreEnMayusculas({ nombre }) {
    console.log('parametro en llaves ',nombre.toUpperCase());
}

imprimirEnMayusculas(david);
imprimirEnMayusculas(sasha);
imprimirNombreEnMayusculas(david);
imprimirNombreEnMayusculas(sasha);
imprimirNombreEnMayusculas({nombre: 'pepito'});

console.log('Variable de alcance global: ', window.david, ' y ', sasha);

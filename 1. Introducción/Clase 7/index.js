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
    var { nombre } = persona;
    console.log('Variable de alcance local ', nombre.toUpperCase());
}

imprimirEnMayusculas(david);
imprimirEnMayusculas(sasha);

function imprimirNombreYEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreYEdad(david);
imprimirNombreYEdad(sasha);

const MAYORIA_EDAD = 18;
var david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    baterista: false,
    dj: false,
    guitarrista: true,
    drone: false
}

var juan = {
    nombre: 'Juan',
    apellido: 'Pérez',
    edad: 13
}
function esMayorDeEdad(persona){
    return persona.edad >= MAYORIA_EDAD;
}

function imprimirSiEsMayorDeEdad(persona) {
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

imprimirSiEsMayorDeEdad(david);
imprimirSiEsMayorDeEdad(juan);
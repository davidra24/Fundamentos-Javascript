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

//Arrow function, persona al ser el unico parámetro no va con paréntesis
//Se puede borrar el return y las llaves, ya que el arrow function hace el return
//se cambia persona.edad por edad que se identifica como la variable de un objeto
//omo se muestra en ({ edad })
const esMayorDeEdad = ({edad}) => edad >= MAYORIA_EDAD;

const imprimirSiEsMayorDeEdad = persona => {
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`);
    }else{
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permitirAcceso(persona) {
    if(!esMayorDeEdad(persona)){
        console.log(`${persona.nombre} ACCESO DENEGADO`);
    }else{
        console.log(`${persona.nombre} ACCESO AUTORIZADO`);
    }
}

const esMenorDeEdad = persona => !esMayorDeEdad(persona)

imprimirSiEsMayorDeEdad(david);
imprimirSiEsMayorDeEdad(juan);
permitirAcceso(david);
permitirAcceso(juan);

console.log('Es menor de edad: '+ esMenorDeEdad(david));
console.log('Es menor de edad: '+ esMenorDeEdad(juan));
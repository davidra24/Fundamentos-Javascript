var david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23
}

//Const valor inmutable
const mayoriaEdad = 18;

function esMayorDeEdadVar(persona){
    //var mensaje es igual que se asigne dentro o fuera de un bloque de codigo
    if(persona.edad >= mayoriaEdad){
        var mensaje = 'Es mayor de edad';
    }else{
        var mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

function esMayorDeEdadLet(persona){
    //let mensaje se reduce exclusicamente al bloque de codigo que se asigna
    if(persona.edad >= mayoriaEdad){
        mensaje = 'Es mayor de edad';
    }else{
        mensaje = 'Es menor de edad';
    }
    console.log(mensaje);
}

esMayorDeEdadLet(david)
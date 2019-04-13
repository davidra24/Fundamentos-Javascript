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

//Parametros por referencia
function cumpleanos(persona){
    console.log(`${persona.nombre} tiene ${persona.edad} años pero`);    
    var { edad } = persona;
    edad++;
    console.log(`Cumplió años y ahora tiene ${edad} años`);
}

cumpleanos(david);
cumpleanos(sasha);

function newCumpleanos(persona){
    return {
        ...persona,
        edad: persona.edad + 1
    }
}

console.log(david, ' Cumpleaños: ', newCumpleanos(david));
console.log(sasha, ' Cumpleaños: ', newCumpleanos(sasha));

var x = 4 , y = '4';

//Contenido igual
console.log('x == "y":', x == y);

//contenido y tipo de dato igual
console.log('x === "y": ', x === y);

//Al comparar objetos se hace la comparación de los objetos segun su ubicacion en RAM
var david = {
    nombre: 'David'
}

var otraPersona = {
    nombre: 'David'
}

console.log('david == otraPersona ', david == otraPersona);
console.log('david === otraPersona ', david === otraPersona);

otraPersona = david;

console.log('otraPersona = david; david === otraPersona: ', david === otraPersona);
console.log('otraPersona = david; david == otraPersona: ', david == otraPersona);

otraPersona = {
    ...david
}

console.log('otraPersona = {...david}; david === otraPersona: ', david === otraPersona);
console.log('otraPersona = {...david}; david == otraPersona: ', david == otraPersona);
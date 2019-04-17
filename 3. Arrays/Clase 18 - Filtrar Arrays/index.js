david = {
    nombre: 'David',
    apellido: 'Ramirez',
    altura: 1.70
}
alan = {
    nombre: 'Alan',
    apellido: 'Harper',
    altura: 1.56
}
martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.90
}
dario = {
    nombre: 'Dario',
    apellido: 'Sánchez',
    altura: 2.0
}
vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.60
}
paula = {
    nombre: 'Paula',
    apellido: 'Vega',
    altura: 1.75
}

//const esAlta = persona => persona.altura > 1.80;
const esAlta = ({ altura }) => altura > 1.80;
const esBaja = ({ altura }) => altura < 1.80;

var personas = [david, alan, martin, dario, vicky, paula];

var personasAltas = personas.filter(esAlta);
var personasBajas = personas.filter(esBaja);

console.log('Personas ',personas);
console.log('Personas altas ',personasAltas);
console.log('Personas bajas ',personasBajas);
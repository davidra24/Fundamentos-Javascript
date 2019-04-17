david = {
    nombre: 'David',
    apellido: 'Ramirez',
    altura: 1.70,
    cantidadLibros: 156
}
alan = {
    nombre: 'Alan',
    apellido: 'Harper',
    altura: 1.56,
    cantidadLibros: 111
}
martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.90,
    cantidadLibros: 56
}
dario = {
    nombre: 'Dario',
    apellido: 'Sánchez',
    altura: 2.0,
    cantidadLibros: 16
}
vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.60,
    cantidadLibros: 115
}
paula = {
    nombre: 'Paula',
    apellido: 'Vega',
    altura: 1.75,
    cantidadLibros: 75
}

var personas = [david, alan, martin, dario, vicky, paula];

var acum = 0;

personas.forEach(element => {
    acum = acum + element.cantidadLibros;
});

console.log(`En total todos tienen ${acum} libros`);

const reducer = (acum, { cantidadLibros }) => acum += cantidadLibros;
/* Esto es lo mismo
const reducer = (acum, persona ) => {
    acum += persona.cantidadLibros;
}*/

var totalLibros = personas.reduce(reducer, 0);
console.log(`En total todos tienen ${acum} libros`);

david = {
    nombre: 'David',
    apellido: 'Ramirez',
    altura: 1.70
}
alan = {
    nombre: 'Alan',
    apellido: 'Harper',
    altura: 1.75
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

var personas = [david, alan, martin, dario, vicky, paula];

console.log('personas: ', personas);
console.log('personas[0]: ', personas[0]);
console.log('personas[0].altura: ', personas[0].altura);
console.log("'personas[0]['altura']: ", personas[0]['altura']);

personas.forEach(element => {
    console.log(`La persona ${element.nombre} mide ${element.altura}`);
});
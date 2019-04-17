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

var personas = [david, alan, martin, dario, vicky, paula];

//({}) -> Retorna { return }
const pasarAlturaACms = persona => ({
        ...persona,    
        altura: persona.altura * 100
})

var personasCms = personas.map(pasarAlturaACms);

console.log('Personas original', personas);
console.log('Personas modificado',personasCms);



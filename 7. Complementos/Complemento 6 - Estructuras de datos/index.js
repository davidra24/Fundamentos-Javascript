const david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23
}

//const compleaños = persona => persona.edad ++;

const cumpleanosInmutable = persona => ({
    ...persona,
    edad : persona.edad + 1
})
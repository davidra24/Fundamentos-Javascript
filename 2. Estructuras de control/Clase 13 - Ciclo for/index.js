var david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23,
    peso: 70
}

const INCREMENTO = 0.5;
const DIAS_ANIO = 365;

const aumentarDePeso = (persona) => {
    persona.peso += INCREMENTO;
}

const disminuirDePeso = (persona) => {
    persona.peso -= INCREMENTO;
}

console.log(`Al inicio del año ${david.nombre} pesa ${david.peso.toFixed(1)} kg`);

for (let i = 0; i < DIAS_ANIO; i++) {
    var random = Math.random();
    if(random < 0.25){
        aumentarDePeso(david);
    }else if(random < 0.50){
        disminuirDePeso(david)
    }
}

console.log(`Al final del año ${david.nombre} pesa ${david.peso.toFixed(1)} kg`);
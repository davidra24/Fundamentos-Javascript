var david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23,
    peso: 70
}

const INCREMENTO = 0.5;
const DIAS_ANIO = 365;
const META = david.peso - 4; 

const aumentarDePeso = persona => persona.peso += INCREMENTO;
const disminuirDePeso = persona => persona.peso -= INCREMENTO;
const comeMucho = () => Math.random() < 0.30;
const haceDeporte = () => Math.random() > 0.4;

var dias = 0;

while(david.peso > META){
    
    if(comeMucho()){
        aumentarDePeso(david);
    }
    if(haceDeporte()){
        disminuirDePeso(david);
    }
    
    console.log('.');
    dias++;
}

console.log(`Pasaron ${dias} hasta que ${david.nombre} adelgazo 4kg`);
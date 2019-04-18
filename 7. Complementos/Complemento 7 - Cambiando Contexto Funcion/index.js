const david = {
    nombre: 'David',
    apellido: 'Ramírez'
}
const jessica = {
    nombre: 'Jessica',
    apellido: 'Cortés'
}

function saludo(){
    console.log(`Hola mi nombre es ${this.nombre}`);
}

function saludar(saludo){
    console.log(`${saludo} mi nombre es ${this.nombre}`);
}

const saludarADavid = saludo.bind(david);
const saludarAJessica = saludo.bind(jessica);

saludarADavid();
saludarAJessica();

setTimeout(saludar.bind(david, 'Hola men'), 1000);

//call crea bind y lo llama
saludar.call(david)
saludar.call(david, 'Hola wey')

saludar.apply(david, ['Hola perritos'])
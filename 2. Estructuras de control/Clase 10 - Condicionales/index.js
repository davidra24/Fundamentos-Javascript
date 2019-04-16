var david = {
    nombre: 'David',
    apellido: 'Ramírez',
    edad: 23,
    ingeniero: true,
    cocinero: false,
    baterista: false,
    dj: false,
    guitarrista: true,
    drone: false
}

function imprimirProfesiones(persona){
    console.log(`${persona.nombre} `);
    if(persona.ingeniero){
        console.log('Es ingeniero');    
    }else{
        console.log('No es ingeniero');    
    }
    if(persona.cocinero){
        console.log('Es cocinero');    
    }else{
        console.log('No es cocinero');    
    }
    if(persona.baterista){
        console.log('Es baterista');    
    }else{
        console.log('No es baterista');    
    }
    if(persona.dj){
        console.log('Es dj');    
    }else{
        console.log('No es dj');    
    }
    if(persona.guitarrista){
        console.log('Es guitarrista');    
    }else{
        console.log('No es guitarrista');    
    }
    if(persona.drone){
        console.log('vuela drones');    
    }else{
        console.log('No vuela drones');    
    }
}

imprimirProfesiones(david);


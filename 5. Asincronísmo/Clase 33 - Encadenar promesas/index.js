const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true }


function obtenerPersonaje(id) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $.get(URL, OPTS, (data) => {
            resolve(data)
        })
        .fail(() => reject(id))
    })

    
    
}

function onErr(id){
    console.log(`Sucedió un error al obtener el personaje ${id}`);
    
}

//Asincronísmo
obtenerPersonaje(1)
    .then(data=>{
        console.log(`El personaje 1 es ${data.name}`);
        return obtenerPersonaje(2)
    })
    .then(data=>{
        console.log(`El personaje 2 es ${data.name}`);
        return obtenerPersonaje(3)
    })
    .then(data=>{
        console.log(`El personaje 3 es ${data.name}`);
        return obtenerPersonaje(4)
    })
    .then(data=>{
        console.log(`El personaje 4 es ${data.name}`);
        return obtenerPersonaje(5)
    })
    .then(data=>{
        console.log(`El personaje 5 es ${data.name}`);
        return obtenerPersonaje(6)
    })
    .then(data=>{
        console.log(`El personaje 6 es ${data.name}`);
        return obtenerPersonaje(7)
    })
    .then(data=>{
        console.log(`El personaje 7 es ${data.name}`);
        return obtenerPersonaje(8)
    })
    .then(data=>{
        console.log(`El personaje 8 es ${data.name}`);
        return obtenerPersonaje(9)
    })
    .then(data=>{
        console.log(`El personaje 9 es ${data.name}`);
        return obtenerPersonaje(10)
    })
    .then(data=>{
        console.log(`El personaje 10 es ${data.name}`);
        return obtenerPersonaje(11)
    })
    .then(data=>{
        console.log(`El personaje 11 es ${data.name}`);
        return obtenerPersonaje(12)
    })
    .then(data=>{
        console.log(`El personaje 12 es ${data.name}`);
        return obtenerPersonaje(13)
    })
    .then(data=>{
        console.log(`El personaje 13 es ${data.name}`);
        return obtenerPersonaje(14)
    })
    .then(data=>{
        console.log(`El personaje 14 es ${data.name}`);
        return obtenerPersonaje(15)
    })
    .then(data=>{
        console.log(`El personaje 15 es ${data.name}`);
    })
    .catch(onErr)
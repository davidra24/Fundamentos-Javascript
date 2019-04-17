const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true }

const onResponse = data =>{
    console.log(`Hola yo soy ${data.name}`);    
}

function obtenerPersonaje(id){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, onResponse)
}

//Asincronísmo
obtenerPersonaje(1);
obtenerPersonaje(2);
obtenerPersonaje(3);
obtenerPersonaje(4);
obtenerPersonaje(5);
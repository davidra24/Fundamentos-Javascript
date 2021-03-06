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

var ids = [1, 2, 3, 4, 5 ,6 ,7];
//Asincronísmo
var promesas = ids.map( id => obtenerPersonaje(id))
Promise
    .all(promesas)
    .then(data => console.log(data))
    .catch(onErr)


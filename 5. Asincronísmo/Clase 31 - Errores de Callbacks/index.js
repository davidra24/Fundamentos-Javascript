const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true }


function obtenerPersonaje(id, callback) {
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, callback)
    .fail(() => {
        console.log(`Sucedió un error no se pudo obtener el personaje ${id}`);        
    })
}

//Asincronísmo
obtenerPersonaje(1, function (data) {
    console.log(`Hola yo soy ${data.name}`);
    obtenerPersonaje(2, function (data) {
        console.log(`Hola yo soy ${data.name}`);
        obtenerPersonaje(3, function (data) {
            console.log(`Hola yo soy ${data.name}`);
            obtenerPersonaje(4, function (data) {
                console.log(`Hola yo soy ${data.name}`);
                obtenerPersonaje(5, function (data) {
                    console.log(`Hola yo soy ${data.name}`);
                    obtenerPersonaje(6, function (data) {
                        console.log(`Hola yo soy ${data.name}`);
                        obtenerPersonaje(7, function (data) {
                            console.log(`Hola yo soy ${data.name}`);
                            obtenerPersonaje(8, function (data) {
                                console.log(`Hola yo soy ${data.name}`);
                                obtenerPersonaje(9, function (data) {
                                    console.log(`Hola yo soy ${data.name}`);
                                    obtenerPersonaje(10, function (data) {
                                        console.log(`Hola yo soy ${data.name}`);
                                        obtenerPersonaje(11);
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});
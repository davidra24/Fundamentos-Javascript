const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const OPTS = { crossDomain: true }


function obtenerPersonaje(id, callback){
    const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
    $.get(URL, OPTS, function(data) {
        console.log(`Hola yo soy ${data.name}`);    
        if(callback){
            callback();
        }
    })
}

//Asincronísmo
obtenerPersonaje(1, function(){
    obtenerPersonaje(2, function(){
        obtenerPersonaje(3, function(){
            obtenerPersonaje(4, function(){
                obtenerPersonaje(5 , function(){
                    obtenerPersonaje(6, function(){
                        obtenerPersonaje(7, function(){
                            obtenerPersonaje(8, function(){
                                obtenerPersonaje(9, function(){
                                    obtenerPersonaje(10, function(){
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
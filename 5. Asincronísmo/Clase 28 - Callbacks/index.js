const API_URL = 'https://swapi.co/api/';
const PEOPLE_URL = 'people/:id';
const LUKE_URL = `${API_URL}${PEOPLE_URL.replace(':id', 1)}`;
const OPTS = { crossDomain: true }

const onResponse = data =>{
    console.log(`Hola yo soy ${data.name}`);    
}

$.get(LUKE_URL, OPTS, onResponse)
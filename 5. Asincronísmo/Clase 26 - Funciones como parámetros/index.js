//Prototipo === clase js
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    //Creación de funciones en prototipos, no es necesaria la palabra function
    saludar(fn) {
        console.log(`Mi nombre es: ${this.nombre} y mi apellido es ${this.apellido}`);
        //null===false, 0===false
        //[] === true, ({}) === true
        if(fn){
            fn(this.nombre, this.apellido);
        }
    }
    soyAlto() {
        console.log(`Soy alto: ${soyAlto(this) ? 'Sí' : 'No'}`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar(fn) {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
        if(fn){
            fn(this.nombre, this.apellido, true);
        }
    }
}
const soyAlto = ({altura}) => altura >= 1.80

function responderSaludo(nombre, apellido, esDev) {
    console.log(`Buen día ${nombre} ${apellido} ${esDev?'No sabía que eras desarrollador':''}`);
}

var david = new Persona('David', 'Ramirez', 1.80);
david.saludar(responderSaludo);


var juan = new Desarrollador('Juan', 'Perez');
juan.saludar(responderSaludo);

var ana = new Desarrollador('Ana', 'Forero');
ana.saludar(responderSaludo);
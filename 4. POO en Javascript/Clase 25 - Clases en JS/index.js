//Prototipo === clase js
class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }
    //Creación de funciones en prototipos, no es necesaria la palabra function
    saludar() {
        console.log(`Mi nombre es: ${this.nombre} y mi apellido es ${this.apellido}`);
    }
    soyAlto() {
        console.log(`Soy alto: ${soyAlto(this) ? 'Sí' : 'No'}`);
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);
    }
    saludar() {
        console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
    }
}
const soyAlto = ({altura}) => altura >= 1.80

var david = new Persona('David', 'Ramirez', 1.80);
david.saludar();
var juan = new Desarrollador('Juan', 'Perez');
juan.saludar();


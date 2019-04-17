//Prototipo = clase js
function Persona(nombre, apellido, altura){
    this.nombre = nombre;
    this.apellido = apellido;
    this.altura = altura;
}

//Creación de funciones en prototipos
Persona.prototype.saludar = function(){
    console.log(`Mi nombre es: ${this.nombre} y mi apellido es ${this.apellido}`);
}

const soyAlto = ({altura}) => altura >= 1.80

Persona.prototype.soyAlto = function(){
    console.log(`Soy alto: ${soyAlto(this)? 'Sí':'No'}`);
}

function Desarrollador(nombre, apellido){
    this.nombre = nombre;
    this.apellido = apellido;
}

function Herencia(protoHijo, protoPadre){
    var fn = function(){};
    fn.prototype = protoPadre.prototype;
    protoHijo.prototype = new fn();
    protoHijo.prototype.constructor = protoHijo;
}

Herencia(Desarrollador, Persona);

Desarrollador.prototype.saludar = function(){
    console.log(`Hola soy ${this.nombre} ${this.apellido} y soy desarrollador`);
    
}


var david = new Persona('David', 'Ramirez', 1.80);
david.saludar();

var juan = new Desarrollador('Juan', 'Perez');
juan.saludar();


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


var david = new Persona('David', 'Ramirez', 1.80);
david.saludar();
david.soyAlto();

var juan = new Persona('Juan', 'Perez', 1.79);
juan.saludar();
juan.soyAlto();

var maria = new Persona('Maria', 'Sanchez', 1.90);
maria.saludar();
maria.soyAlto();
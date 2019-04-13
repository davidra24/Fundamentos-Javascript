var nombre = 'David', apellido = 'Ramírez';

//mayuscula y minuscula
var nombreMayuscula = nombre.toUpperCase();
var apellidoEnMinusculas = apellido.toLowerCase();

console.log(nombreMayuscula);
console.log(apellidoEnMinusculas);

//Caracter especifico
var primerCaracterNombre = nombre.charAt(0);
var cantidadCaracteresNombre = nombre.length;

console.log(primerCaracterNombre); 
console.log(cantidadCaracteresNombre);

var nombreCompleto = nombre + ' ' + apellido;
console.log('Normal: ', nombreCompleto);

//Interpolación de texto

var nombreInterpolado = `${nombre} ${apellido}`;
console.log('Interpolado: ' + nombreInterpolado);

//SubString
var subStr = nombre.substr(1, 3);
console.log(subStr);

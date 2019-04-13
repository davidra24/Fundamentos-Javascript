var edad = 23;

console.log('edad: ', edad);

edad += 3;

console.log('edad + 3: ', edad);

var peso = 75;

console.log('peso: ', peso);

peso -= 8;

console.log('peso menos 8: ', peso);

var sandwich = 3;

peso += sandwich;
console.log('peso + sandwich: ', peso);

var jugarFutbol = -4;

peso += jugarFutbol;

console.log('peso - futbol: ', peso);

var precioVino = 200.3;

console.log('precio de vino: ', precioVino);

var total = Math.round(precioVino * 100 * 3) / 100;
var totalStr = total.toFixed(3);
var totalFlt = parseFloat(totalStr);

console.log('Total compra: ', total);
console.log('Total compra con decimales: ', totalStr);
console.log('Total parse float: ', totalFlt);

var pizza = 8;
var personas = 2;

var porcionesPorPersona = pizza / personas;
console.log('Porciones de pizza por persona: ', porcionesPorPersona);


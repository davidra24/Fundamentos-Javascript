let contador = 0;

const llueve = () => Math.random() < .25;

do {
    contador++;
} while (!llueve());

console.log(`Fui a ver si llovía ${contador} ${contador===1?'vez':'veces'}`);


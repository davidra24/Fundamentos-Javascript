function factorial(numero){
    if(!this.cache){
        this.cache = {}
    }
    if(this.cache[numero]){
        return this.cache[numero]
    }
    if(numero === 1){
        return 1;
    }else{
        this.cache[numero] = numero * factorial(numero - 1);
        return this.cache[numero];
    }
}

const numero = 6;
const fact = factorial(6);
console.log(`El factorial de ${numero} es ${fact}`);

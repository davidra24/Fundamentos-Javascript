const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const ULTIMO_NIVEL = 10;

class Juego {
    constructor(){
        this.inicializar();
        this.generarSecuencia();
        setTimeout(() => {
            this.siguienteNivel();    
        }, 500);
    }
    inicializar(){
        this.toggleBtnEmpezar();
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
        this.siguienteNivel = this.siguienteNivel.bind(this);
        this.elegirColor = this.elegirColor.bind(this);
    }
    toggleBtnEmpezar(){
        if(btnEmpezar.classList.contains('hide')){
            btnEmpezar.classList.remove('hide')
        }else{
            btnEmpezar.classList.add('hide')
        }

    }
    generarSecuencia(){
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
    }
    siguienteNivel(){   
        this.subNivel = 0;
        this.iluminarSecuencia();   
        this.agregarEventosClick();
    }
    iluminarSecuencia(){
        for (let i = 0; i < this.nivel; i++) {
            const color = this.transformarNumeroAColor(this.secuencia[i])
            setTimeout(() => this.iluminarColor(color), 1000 * i); 
        }
    }
    iluminarColor(color){
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }
    apagarColor(color){
        this.colores[color].classList.remove('light');
    }
    transformarNumeroAColor(numero){
        switch (numero) {
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
            case 3:
                return 'verde'
        }
    }
    //bind -> atar o enlazar 
    agregarEventosClick(){
        this.colores.celeste.addEventListener('click', this.elegirColor);
        this.colores.verde.addEventListener('click', this.elegirColor);
        this.colores.violeta.addEventListener('click', this.elegirColor);
        this.colores.naranja.addEventListener('click', this.elegirColor);
    }
    eliminarEventosCLick(){
        this.colores.celeste.removeEventListener('click', this.elegirColor);
        this.colores.verde.removeEventListener('click', this.elegirColor);
        this.colores.violeta.removeEventListener('click', this.elegirColor);
        this.colores.naranja.removeEventListener('click', this.elegirColor);
    }
    elegirColor(event){
        const nombreColor = event.target.dataset.color;
        const numeroColor = this.transformarColorANumero(nombreColor);
        this.iluminarColor(nombreColor)
        if(numeroColor === this.secuencia[this.subNivel]){
            this.subNivel++;
            if(this.subNivel === this.nivel){
                this.nivel++;
                this.eliminarEventosCLick();
                if(this.nivel === ULTIMO_NIVEL + 1){
                    this.ganoElJuego();
                }else{
                    setTimeout(() => this.siguienteNivel(), 1500);
                }
            }
        }else{
            this.perdioElJuego()
        }
    }
    ganoElJuego(){
        Swal.fire(
            '¡Buen trabajo!',
            'Felicitaciones, has ganado',
            'success'
        )
        .then(() => {
            this.inicializar();
        })
    }
    perdioElJuego(){
        Swal.fire(
            '¡Qué mal! :(',
            'Lo sentimos, has perdido el juego',
            'error'
        )
        .then(() => {
            this.eliminarEventosCLick();
            this.inicializar();
        })
    }
    transformarColorANumero(color){
        switch (color) {
            case 'celeste':
                return 0
            case 'violeta':
                return 1
            case 'naranja':
                return 2
            case 'verde':
                return 3
        }
    }
}

function empezarJuego(){
    window.juego = new Juego();
}
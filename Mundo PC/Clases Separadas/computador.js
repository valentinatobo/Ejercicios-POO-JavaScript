class Computador{
    static contComputadores= 0;

    constructor(nombre, monitor, teclado, raton){
        this._idPC = ++ Computador.contComputadores;
        this._nombre = nombre;
        this._Monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get idPC(){
        return this._idPC;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get monitor(){
        return this._Monitor;
    }

    set monitor(monitor){
        this._Monitor = monitor;
    }

    get teclado(){
        return this._teclado;
    }

    set teclado(teclado){
        this._teclado = teclado;
    }

    get raton(){
        return this._raton;
    }

    set raton(raton){
        this._raton = raton;
    }

    toString(){
        return `idComputador: ${this._idPC} \n ${this._Monitor.toString()} \n ${this._teclado.toString()} \n ${this._raton.toString()}`;
    }
}


// var pc = new Computador("Holi", mouse, teclado, monitorcito);
// var pc2 = new Computador("Chai", mouse2, teclado2, monitorcito2);
// var pc3 = new Computador("Buenas", mouse2, teclado, monitorcito);
// console.log(pc.toString());

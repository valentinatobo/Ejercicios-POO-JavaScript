class DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones =0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `[idRaton: ${this._idRaton}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }

}

class Teclado extends DispositivoEntrada{

    static contadorTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `[idTeclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

class Monitor{

    static ContMonitores =0;

    constructor(marca, tamaño){
        this._idMonitor = ++ Monitor.ContMonitores;
        this._Marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }

    get marca(){
        return this._Marca;
    }

    set marca(marca){
        this._Marca = marca;
    }

    
    get tamaño(){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `[idMonitor: ${this._idMonitor}, Marca: ${this._Marca}, Tamaño: ${this._tamaño}]`;
    }
}


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
        return `idComputador: ${this._idPC} \n ${this._Monitor} \n ${this._teclado} \n ${this._raton}`;
    }
}


class Orden{
    static contOrdenes=0;

    constructor(){
        this._idOrden = ++ Orden.contOrdenes;
        this._computadoras = [];
    }

    get idOrden(){
        return this._idOrden;
    }

    get computadoras(){
        return this._computadoras;
    }

    set computadoras(computadora){
        this._computadoras.push(computadora);
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora);
    }

    mostrarOrden(){
        var orden = "";
        for (let pc of this._computadoras){
            orden += `\n ${pc}`;
        }
        return `idOrden: ${this._idOrden} -> Computadoras: \n ${orden}`;
    }

    toString(){
        return `idOrden: ${this._idOrden} -> Computadoras: \n ${this._computadoras}`
    }
}

var mouse = new Raton("USB", "HP");
var mouse2 = new Raton("BW", "DELL");
mouse.toString();

var teclado = new Teclado("BW", "Toshiba");
var teclado2 = new Teclado("USB", "LENOVO");
teclado.toString();

var monitorcito = new Monitor("Toshiba", 18);
var monitorcito2 = new Monitor("Samsung", 20);
monitorcito.toString();

var pc = new Computador("Holi", mouse, teclado, monitorcito);
var pc2 = new Computador("Chai", mouse2, teclado2, monitorcito2);
var pc3 = new Computador("Buenas", mouse2, teclado, monitorcito);


var orden = new Orden();
orden.agregarComputadora(pc);
orden.agregarComputadora(pc3);
orden.agregarComputadora(pc3);
console.log(orden.mostrarOrden());

console.log(orden.toString());
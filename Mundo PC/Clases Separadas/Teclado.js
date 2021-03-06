class Teclado extends DispositivoEntrada{

    static contTeclados = 0;

    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++ Teclado.contTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `[idTeclado: ${this._idTeclado}, Tipo Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`;
    }
}

// var teclado = new Teclado("BW", "Toshiba");
// var teclado2 = new Teclado("USB", "LENOVO");
// teclado.toString();
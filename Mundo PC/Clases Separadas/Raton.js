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

// var mouse = new Raton("USB", "HP");
// var mouse2 = new Raton("BW", "DELL");
// mouse.toString();

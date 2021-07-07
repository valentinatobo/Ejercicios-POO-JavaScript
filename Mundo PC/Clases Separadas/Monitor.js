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

// var monitorcito = new Monitor("Toshiba", 18);
// var monitorcito2 = new Monitor("Samsung", 20);
// monitorcito.toString();
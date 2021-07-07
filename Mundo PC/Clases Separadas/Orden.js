





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
            orden += pc.toString() + "\n";
        }
        return `idOrden: ${this._idOrden} -> Computadoras: \n ${orden}`;
    }

    toString(){
        return `idOrden: ${this._idOrden} -> Computadoras: \n ${this._computadoras}`
    }
}


// var orden = new Orden();
// orden.agregarComputadora(pc);
// orden.agregarComputadora(pc3);
// console.log(orden.mostrarOrden());
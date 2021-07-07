class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
        this.contadorProductosAgregados = 0;
    }

    get idOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        if (this._productos.length <= 5){
            this._productos.push(producto);
            this.contadorProductosAgregados ++;
        }else {
            console.log("Ya se alcnazo el max de productos permitido");
        }
    }
    calcularTotal(){
        let total = 0;
        let sub_total =0;
        for (let producto of this._productos){
            sub_total = producto._precio* producto._cantidad;
            total += sub_total;
        }
        return total;
    }

    mostrarOrden(){
        let productoOrden = "";
        for (let producto of this._productos){
            productoOrden += producto.toString() + " "; 
        }

        console.log(` idOrden= ${this._idOrden} \n con un total de: $${this.calcularTotal()}: ${ productoOrden} ` )
        
    }
}

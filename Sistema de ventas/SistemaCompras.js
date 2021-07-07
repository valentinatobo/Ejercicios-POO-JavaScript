class Producto{
    
    static contadorProductos = 0;

    constructor(cantidad,nombre, precio){
        this._idProducto = ++ Producto.contadorProductos;
        this._cantidad = cantidad;
        this._nombre = nombre;
        this._precio = precio;
    }

    get idProducto(){
        return this._idProducto;
    }

    get cantidad(){
        return this._cantidad;
    }

    set cantidad(cantidad){
        this._cantidad = cantidad;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        // return "Se realizo su pedido de: " + this._nombre + " con un id: "+ this._idProducto +" y con el precio de: " + this._precio; 
        return ` \n {idProducto: ${this._idProducto} -> Nombre: ${this._nombre} -> Precio: $${this._precio}}`;
    
    }
}

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



let mani = new Producto(3,"mani", 23456);
let donas = new Producto(2,"donas", 3400);
let arroz = new Producto(5,"arroz", 34567);

console.log(mani.toString());


let orden1 = new Orden();
orden1.agregarProducto(mani);
orden1.agregarProducto(donas);
orden1.agregarProducto(arroz);
orden1.mostrarOrden();

var orden2 = new Orden();
orden2.agregarProducto(donas);
orden2.agregarProducto(arroz);
orden2.mostrarOrden();


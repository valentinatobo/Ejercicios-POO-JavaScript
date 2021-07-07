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

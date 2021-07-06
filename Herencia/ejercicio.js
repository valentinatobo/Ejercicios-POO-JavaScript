class Persona{

    static contadorPersonas = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        this._idPersona = ++Persona.contadorPersonas;
    }

    get idPersona(){
        return this._idPersona;
    }

    get nombre(){
        return this._nombre();
    }

    set nombre(nombre){
        this._nombre = nombre;        
    }

    get apellido(){
        return this._apellido();
    }

    set apellido(apellido){
        this._apellido = apellido;        
    }

    get edad(){
        return this._edad();
    }

    set edad(edad){
        this._edad = edad;        
    }

    toString(){
        return this._nombre + " " + this._apellido + " tiene " + this._edad + " años " + ", el id: " + this._idPersona; 
    }
}

class Empleado extends Persona{

    static contadorEmpleados =0;

    constructor(nombre, apellido, edad, sueldo) {
        super(nombre, apellido, edad);
        this._idEmpleado = ++Empleado.contadorEmpleados;
        this._sueldo = sueldo;
    }

    get idEmpleado(){
        return this._idEmpleado;
    }

    get sueldo(){
        return this._sueldo;
    }

    set sueldo(sueldo){
        this._sueldo = sueldo;
    }

    toString(){
        return super.toString() + this._idEmpleado + " y sueldo: " + this._sueldo;
    }
}

class Cliente extends Persona{

    static contadorCliente = 0;

    constructor(nombre,apellido, edad, fechaRegistro){
        super(nombre,apellido, edad);
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get idCliente(){
        return this._idCliente;
    }

    get fechaRegistro(){
        return this._fechaRegistro;
    }

    set fechaRegistro(fechaRegistro){
        this._fechaRegistro = fechaRegistro;
    }

    toString(){
        return super.toString() + this._idCliente + " y su fecha de registro: " + this._fechaRegistro;
    }

}

var personita = new Persona("Val", "Tobo", 21);
console.log(personita.toString());

var personita2 = new Persona("Diana", "Diaz", 21);
console.log(personita2.toString());

let empleadito = new Empleado("Juan", "Neisa",22, 23000000);
console.log(empleadito.toString());

let empleadito2 = new Empleado("David", "Paramo",22, 23000000);
console.log(empleadito2.toString());

let clientecito = new Cliente("Fer", "Castro", 34, new Date());
console.log(clientecito.toString());

let clientecito2 = new Cliente("Santi", "Rincón", 34, new Date());
console.log(clientecito2.toString());




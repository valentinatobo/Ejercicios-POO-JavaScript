
class Empleado extends Persona{

    static contadorEmpleados =0;

    constructor(nombre, apellido, edad, idEmpleado, sueldo) {
        super(idPErsona, nombre, apellido, edad);
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

    get toString(){
        return super.toString() + this._idEmpleado + " y sueldo: " + this._sueldo;
    }
}

let empleadito = new Empleado(11, "Juan", "Neisa", 22, 234, 23000000);
console.log(empleadito.toString);
class Empleado extends Persona{

    static contadorEmpleados = 0;

    constructor(nombre,apellido, edad , sueldo){
        super(nombre,apellido,edad)
        this._idEmpleado = ++Empleado.contadorEmpleados
        this._sueldo = sueldo
    }

    get IdEmpleado(){
        return this._idEmpleado
    }

    get Sueldo(){
        return this._sueldo
    }

    set Sueldo(sueldo){
        return this._sueldo = sueldo
    }

    toString(){
        return super.toString() + ' ' + this._idEmpleado + ' ' + this._sueldo
    }
}

let empleado1 = new Empleado('Alvaro' , 'Cañadas' , '27' , '1000')
console.log(empleado1.toString())
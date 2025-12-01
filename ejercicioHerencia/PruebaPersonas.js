//Clases
class Persona {

    static contadorPersonas = 0

    constructor(nombre,apellido,edad){

        this._idPersona = ++Persona.contadorPersonas
        this._nombre = nombre
        this._apellido = apellido
        this._edad = edad 
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        return this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        return this._apellido = apellido
    }

    get edad(){
        return this._edad
    }

    set edad(edad){
        return this._edad = edad
    }


    toString(){
        return `${this._idPersona} ${this._nombre} ${this._apellido} ${this._edad}`
    }
}

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

class Cliente extends Persona {
    static contadorClientes = 0

    constructor(nombre,apellido,edad,fechaRegistro){
        super(nombre,apellido,edad)
        this._idCliente = ++Cliente.contadorClientes
        this._fechaRegistro =  new Date(fechaRegistro)
    }

    get IdCliente(){
        return this._idCliente
    }

    get FechaRegistro(){
        return this._fechaRegistro
    }

    set FechaRegistro(fechaRegistro){
        return this._fechaRegistro = fechaRegistro
    }

    toString(){
        return super.toString() + ' ' + this._idCliente + ' '  + this._fechaRegistro
    }
}



/*


*/




let persona1 = new Persona('Pepe' , 'Xtrem' , '55')
console.log(persona1.toString())

let persona2 = new Persona('TR' , 'Xtrem' , '44')
console.log(persona2.toString())

let empleado1 = new Empleado('Alvaro' , 'Cañadas' , '27' , '1000')
console.log(empleado1.toString())
let empleado2 = new Empleado('Aitor' , 'tilla' , '21' , '1000')
console.log(empleado2.toString())

let cliente1 = new Cliente('Diego' , 'Blansa' , '21' , '2023-02-01')
console.log(cliente1.toString())
let cliente2 = new Cliente('Anta' , 'Blsh' , '21' , '2023-03-01')
console.log(cliente2.toString())






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

let cliente1 = new Cliente('Diego' , 'Blansa' , '21' , '2023-02-01')
console.log(cliente1.toString())

//Clase Dispositivo Entrada

class DispositivoEntrada{
    constructor(tipoEntrada,marca){
        this._tipoEntrada = tipoEntrada
        this._marca = marca
    }

    get tipoEntrada(){
        return this._tipoEntrada
    }

    set tipoEntrada(tipoEntrada){
        return this._tipoEntrada = tipoEntrada
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        return this._marca = marca
    }
}


//Clase Ratón

class Raton extends DispositivoEntrada{
 static contadorRatones = 0
 constructor(tipoEntrada,marca){
    super(tipoEntrada,marca)
    this._idRaton = ++Raton.contadorRatones
 }

 get idRaton(){
    return this._idRaton
 }


 toString(){
    return `Ratón: ID Raton: ${this._idRaton} , Tipo de Entrada: ${this._tipoEntrada} , Marca: ${this._marca}`
 }
}


let raton1 = new Raton('USB', 'HP')
console.log(raton1.toString())
let raton2 = new Raton('Bluetooth', 'LG')
raton2.marca = 'Samsung'
console.log(raton2.toString())

//Clase Teclado

class Teclado extends DispositivoEntrada{
 static contadorTeclados = 0
 constructor(tipoEntrada,marca){
    super(tipoEntrada,marca)
    this._idTeclado = ++Teclado.contadorTeclados
 }

 get idTeclado(){
    return this._idTeclado
 }

 toString(){
    return `Teclado: ID Teclado: ${this._idTeclado}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}`
 }
}

let teclado1 = new Teclado('USB' ,'Corsair')
let teclado2 = new Teclado('Bluetooth' ,'MSI')

console.log(teclado1.toString())
console.log(teclado2.toString())


//Clase Monitor

class Monitor{
    static contadorMonitores = 0
    constructor(marca,tamaño){
        this._idMonitor = ++ Monitor.contadorMonitores
        this._marca = marca
        this._tamaño = tamaño
    }

    get idMonitor(){
        return this._idMonitor
    }

    get marca(){
        return this._marca
    }

    set marca(marca){
        return this._marca = marca
    }

    get tamaño(){
        return this._tamaño
    }

    set tamaño(tamaño){
        return this._tamaño = tamaño
    }

    toString(){
        return `Monitor [idMonitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }
}

let monitor1 = new Monitor('MSI', '25')
let monitor2 = new Monitor('LG', '30')
console.log(monitor1.toString())
console.log(monitor2.toString())


//Clase Computadora

class Computadora{
    static constadorComputadoras = 0
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.constadorComputadoras
        this._nombre = nombre
        this._monitor = monitor
        this._teclado = teclado
        this._raton = raton
    }

    toString(){
        return `idComputadora: ${this._idComputadora} Nombre: ${this._nombre} \n ${this._monitor} \n ${this._teclado} \n ${this._raton}`
    }

    get idComputadora(){
        return this.idComputadora
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        return this._nombre = nombre
    }

    get monitor(){
        return this._monitor
    }

    set monitor(monitor){
        return this._monitor = monitor
    }

    get teclado(){
        return this._teclado 
    }

    set teclado(teclado){
        return this._teclado = teclado
    }

    get raton(){
        return this._raton
    }

    set raton(raton){
        return this._raton = raton
    }



    
}

let computadora1 = new Computadora('HP',monitor1,raton2,teclado1)
let computadora2 = new Computadora('EnergySystem',monitor1,raton1,teclado2)

console.log(computadora1.toString())
console.log(computadora2.toString())


class Orden{
    static contadorOrdenes = 0

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._computadoras = []
    }

    get idOrden(){
        return this._idOrden
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = ''

        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`)
    }
}

let orden1 = new Orden()

orden1.agregarComputadora(computadora2)
orden1.agregarComputadora(computadora1)
orden1.mostrarOrden()

let orden2 = new Orden()
orden2.agregarComputadora(computadora2)
orden2.mostrarOrden()

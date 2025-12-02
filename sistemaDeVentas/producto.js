//Clase Producto

class Producto {

    static constadorProductos = 0

    constructor( nombre , precio ){

        this._idProducto = ++Producto.constadorProductos
        this._nombre = nombre
        this._precio = precio
    }

    get idProducto(){
        return this._idProducto
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        return this._nombre = nombre
    }

    get precio(){
        return this._precio
    }

    set precio(precio){
        return this._precio = precio
    }

    toString(){
        return `idProducto: ${this._idProducto} Nombre: ${this._nombre} Precio: ${this._precio}`
    }
}


//Clase Orden

class Orden{

    static contadorOrdenes = 0

    static get MAX_PRODUCTOS(){
        return 5
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes
        this._productos = []
    }

    get idOrden(){
        return this._idOrden
    }

    agregarProducto(producto){
        if(this._productos.length < Orden.MAX_PRODUCTOS){
            this._productos.push(producto)
        }else{
            console.log('Numero de productos permitidos sobrepasado')
        }
    }

    calcularTotal(){
        let totalVenta = 0
        for(let producto of this._productos){
            totalVenta += producto.precio
        }
        return totalVenta
    }

    mostrarOrden(){
        let productosOrden = ''
        for(let producto of this._productos){
            productosOrden += '\n' + producto.toString() + ' '
        }

        console.log(`Orden: ${this._idOrden}  Total: ${this.calcularTotal()}€, Productos: ${productosOrden} `)
    }


}

let producto1 = new Producto('Pantalon' , 40)
let producto2 = new Producto('Sudadera' , 90)

let orden1 = new Orden()
orden1.agregarProducto(producto1)
orden1.agregarProducto(producto2)
orden1.mostrarOrden()

let orden2 = new Orden()
let producto3 = new Producto('Gafas' , 200)
orden2.agregarProducto(producto1)
orden2.agregarProducto(producto2)
orden2.agregarProducto(producto3)
orden2.mostrarOrden()

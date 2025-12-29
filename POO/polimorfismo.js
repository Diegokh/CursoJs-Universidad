//Polimorfismo

class Empleado{
    constructor(nombre,sueldo){
        this.nombre = nombre
        this.sueldo = sueldo
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`
    }
}

class Gerente extends Empleado{
    constructor(nombre,sueldo,departamento){
        super(nombre,sueldo)
        this.departamento = departamento
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this.departamento}`
    }

}

function imprimir(tipo){
tipo.obtenerDetalles();

console.log(tipo.obtenerDetalles())
}

let empleado1 = new Empleado ('Juan', 7000)

let gerente1 = new Gerente('Carlos',3000,'Sistemas')

imprimir(gerente1)
imprimir(empleado1)

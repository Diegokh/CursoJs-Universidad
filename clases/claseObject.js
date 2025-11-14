//Clase Object en JS


class Persona{
    constructor(nombre,apellido){
        this._nombre = nombre; //Se debe agregar un _ al inico de la propiedad para poder usar get/set
        this._apellido = apellido;
    }

    get nombre(){
        return this._nombre
    }

    set nombre(nombre){
        this._nombre = nombre
    }

    get apellido(){
        return this._apellido
    }

    set apellido(apellido){
        this._apellido = apellido
    }

    nombreCompleto(){
        return this._nombre + ' ' + this._apellido;
    }

    //Sobreescribiendo el metodo de la clase Padre (Object)

    toString(){
        //Se aplica polimorfismo
        return this.nombreCompleto();
    }
}



class Empleado extends Persona{
    constructor(nombre,apellido,departamento){
        super(nombre,apellido); //Llamar al constructor de la clase padre
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //Sobreescritura
    nombreCompleto(){
       // return this._nombre + ' ' + this._apellido + ' , ' + this._departamento;
       return super.nombreCompleto() + ' , ' + this._departamento; /* Usando super */
    }
}




let persona1 = new Persona('Juan','Perez');
persona1.nombre = 'Pepe'
console.log(persona1.toString())

let empleado1 = new Empleado('maria','jimenez', 'TIC');
console.log(empleado1)

console.log(empleado1.nombreCompleto()) 

console.log(empleado1.toString())
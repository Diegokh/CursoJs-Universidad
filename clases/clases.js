//CLASES EN JS

//NO es posible crear objetos antes de declarar la clase
//No es posible el Hoisting en las clases de JS
//let persona2 = new Persona('Karla','Juarez')

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
}

let persona1 = new Persona('Juan','Perez');
persona1.nombre = 'Pepe'
console.log(persona1.nombre)



/*console.log(persona1);

let persona2 = new Persona('Carlos', 'Lara');
console.log(persona2)*/
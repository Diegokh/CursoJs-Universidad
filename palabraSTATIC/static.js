//Herencia en JS

class Persona{

    static contadorObjetosPersonas = 0; //atributo de nuestra clase

    //Atributo de nuestros objetos --- el atributo es no-static
    email = 'Valor deault email';

    constructor(nombre,apellido){
        this._nombre = nombre; //Se debe agregar un _ al inico de la propiedad para poder usar get/set
        this._apellido = apellido;
        Persona.contadorObjetosPersonas++;
        console.log('Se incrementa contador' + Persona.contadorObjetosPersonas)
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

    toString(){
        return this.nombreCompleto()
    }

    static saludar(){
        console.log('saludos desde metodo static')
    }

    static saludar2(persona){
        console.log(persona.nombre + ' ' + persona.apellido)
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
console.log(persona1)

let empleado1 = new Empleado('maria','jimenez', 'TIC');
console.log(empleado1)

console.log(empleado1.nombreCompleto()) 


// persona1.saludar();  no es posible llamar un metodo satic desde un objeto

Persona.saludar()
Persona.saludar2(persona1)

Empleado.saludar()
Empleado.saludar2(empleado1)


console.log(persona1.contadorObjetosPersonas)
console.log(Persona.contadorObjetosPersonas)


console.log(Empleado.contadorObjetosPersonas)

console.log(persona1.email)

console.log(empleado1.email)

console.log(Persona.email)
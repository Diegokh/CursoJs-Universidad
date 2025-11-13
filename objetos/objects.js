//OBJETOS EN JS
//

//USO DE CALL

let persona1 ={
    nombre: 'Juan',
    apellido: 'Perez',
    nombreCompleto : function(titulo,tel){
        //return this.nombre + ' ' + this.apellido
        return  titulo + ': ' + this.nombre + ' ' + this.apellido + ', ' + tel 
    }
}

let persona2 ={
    nombre: 'Carlos',
    apellido: 'Lara',
    
}


//Uso de apply, nos permite llamar a un metodo que un objeto no lo tiene definido(igual que call)
//Los argumentos se pasan mediante un array
console.log(persona1.nombreCompleto('Lic','8734'))

let array = ['Ingeniero' , '434334']
console.log(persona1.nombreCompleto.apply(persona2,array))




console.log(persona1.nombreCompleto('Licenciado' , '4673894'))

//Uso de call para usar el metodo de otro objeto

console.log(persona1.nombreCompleto.call(persona2))

//Paso de parametro usando call
console.log(persona1.nombreCompleto.call(persona2,'Ingeniero','3434224'))



//console.log(persona1.nombreCompleto())






/*
//Funcion constructor persona
function Persona(nombre,apellido,email){
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.nombreCompleto = function(){
        return this.nombre + ' ' + this.apellido;
    }
}

//Agregara una nueva propiedad al objeto sin necesidad de modificar el objeto
Persona.prototype.tel = '934793479'


let padre = new Persona('Juan', 'Perez', 'jmdf23@gmail.com')

padre.tel = '1111' //Modifico el valor del telefono

console.log(padre.tel)
let madre = new Persona('Nina' , 'Mai' , 'nm3232@gmail.com')
madre.tel = '3476'
console.log(madre.tel)

padre.nombre = 'Carlos'
console.log(padre)





/*
let miObjeto = new Object();
let miObjeto2 = {}


let miCadena1 = new String('Hola');
let miCadena2 = 'Hola';

let miNumero = new Number(1);
let miNumero2 = 1;

let miBoolean = new Boolean();
let miBoolean2 = false;

let miArray = new Array();
let miArray2 = [];

let miFuncion = new Function();
let miFuncion2 = function(){};


/*
let persona = {
    nombre: 'juan',
    apellido: 'garcia',
    email: 'jperez@gmail.com',
    edad: 28,
    idioma: 'es',
    get lang(){
        return this.idioma.toUpperCase()
    },
    set lang(lang){
        this.idioma = lang.toUpperCase()
    },
    get nombreCompleto(){
        return this.nombre + ' ' + this.apellido
    }
}

console.log(persona.lang)
persona.lang = 'gr'
console.log(persona.idioma)
console.log(persona.nombreCompleto)





/*


let persona = {
    nombre: 'juan',
    apellido: 'garcia',
    email: 'jperez@gmail.com',
    edad: 28,
    nombreCompleto: function(){
        return this.nombre + ' ' + this.apellido
    }

}

persona.tel = '53434242'
persona.tel = '11111111'

console.log(persona)

delete persona.tel

console.log(persona)

//Concatenar cada valor de cada propiedad

console.log(persona.nombre + ',' + persona.apellido)

//for in
for(nombrePersona in persona){
    console.log(persona[nombrePersona])
}

//
let personaArray = Object.values(persona)
console.log(personaArray)

let personaString = JSON.stringify(persona)
console.log(personaString)



/*
console.log(persona.nombre)
console.log(persona['apellido'])


//for in
/*
for(nombrePropiedad in persona){
    console.log(nombrePropiedad)
    console.log(persona[nombrePropiedad])
}
*/








/*
console.log(persona.nombre)
console.log(persona.edad)
console.log(persona.nombreCompleto())


let persona2 = new Object()

persona2.nombre = 'Jorge'
persona2.apellido = 'Nitales'
persona2.direccion = 'Nope 22'
persona2.tel = '748372837'

console.log(persona2.tel)
*/
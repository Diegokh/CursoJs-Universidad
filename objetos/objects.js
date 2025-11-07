//OBJETOS EN JS


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
persona.lang = 'en'
console.log(persona.idioma)





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
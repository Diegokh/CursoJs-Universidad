//Cadenas y funciones en JS
//cadenas inmutables en JS(NO SE PUEDEN MODIFICAR EL VALOR)

function cambiarValor(parametro){
    parametro = 'Adios'
}

//Llamamos a la funcion

let argumento = 'Hola'

console.log(`Antes de la funcion: ${argumento}`)

cambiarValor(argumento)

console.log(`Despues de la funcion ${argumento}`)
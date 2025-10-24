//Paso por referencia
//Objetos (array) se pasan por referencia

function cambiarValor(parametro){
    parametro[0] = 20
}

//Llamamos a al funcion
let arreglo = [10]
console.log(`Antes de funcion: ${arreglo[0]}`)
cambiarValor(arreglo)
console.log(`Despues de funcion ${arreglo[0]}`)
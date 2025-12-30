//funciones normales

function miFuncion1(){
    console.log('funcion 1')
}

function miFuncion2(){
    console.log('funcion 2')
}

miFuncion1()
miFuncion2()

//Funciones callback

function imprimir(mensaje){
    console.log(mensaje)
}

function sumar(op1,op2,funcionCallback){
    let res = op1 + op2
    funcionCallback(`Resulatado: ${res}`)
}

sumar(5,3,imprimir)

//Llamadas asincronas con setTimeout
function miFuncionCallback(){
    console.log('saludo asincrono despues de 3 seg')
}

setTimeout(miFuncionCallback, 3000) // despues de 3 segundos

setTimeout(function(){console.log('saludo asincrono 2')} , 4000)

setTimeout( () => console.log('saludo asincrono 3') , 5000  )
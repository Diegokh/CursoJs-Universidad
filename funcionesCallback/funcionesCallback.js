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
    funcionCallback(`Resukatado: ${res}`)
}

sumar(5,3,imprimir)
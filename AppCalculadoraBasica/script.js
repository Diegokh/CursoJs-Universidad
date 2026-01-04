// CALCULADORA

const operandoA = document.querySelector('#opr1')
const operandoB = document.querySelector('#opr2')
let boton = document.querySelector('#boton')
let resultado = document.querySelector('#resultado')


boton.addEventListener('click',Sumar)

function Sumar() {

    let errores = false
    

    if(operandoA.value === '' ){
        operandoA.value = 'Inserta un numero'
        errores = true
        
    }else if(isNaN(operandoA.value)){
        operandoA.value = 'Inserta un valor numerico'
        errores = true
    }

     if(operandoB.value === '' ){
        operandoB.value = 'Inserta un numero'
        errores = true
    }else if(isNaN(operandoB.value)){
        operandoB.value = 'Inserta un valor numerico'
        errores = true
    }

    if(errores === true) return

    let sumatorio = parseInt(operandoA.value)  + parseInt(operandoB.value)

    resultado.innerHTML = `El resultado de la suma es ${sumatorio}`

   

    
 
}




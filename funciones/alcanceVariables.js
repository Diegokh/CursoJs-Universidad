//Alcance variables en JS

let variableGlobal = 5

//Modifico valor
variableGlobal = 10

// Defino funcion
function miFuncion(variableLocal){
    console.log(variableLocal)

    //modifico variable global
    variableGlobal = 20

    //No podemos redefinir variable global (let)
     variableGlobal = 30 
}

//llamo funcion
miFuncion(variableGlobal)
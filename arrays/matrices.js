//Matrices en js

//Declarar matriz
let matriz = [[],[]]


//Modificar matriz

//Renglon 0
matriz[0][0] = 100;
matriz[0][1] = 200;
matriz[0][2] = 300;

//Renglon 1
matriz[1][0] = 400;
matriz[1][1] = 500;
matriz[1][2] = 600;

//Leer
console.log(`Elemento [0][1] = ${matriz[0][1]}`)
console.log(`Elemento [1][2] = ${matriz[1][2]}`)


//Numero Renglones

console.log(matriz.length)

//Numero columnas
console.log(matriz[0].length)
console.log(matriz[1].length)

//Recorrer con ciclo for

// //Renglones
for(let ren = 0 ; ren < matriz.length ; ren ++){

   //Columnas
    for( let col = 0; col < matriz [ren].length ; col ++){
        console.log(`Elemento[${ren}] [${col}] = ${matriz[ren][col]}`)
    }
}




//Matriz simple

//let matriz2 = [[100.200,300] , [400,500,600]]

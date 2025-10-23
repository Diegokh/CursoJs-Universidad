//Dia semana
/*
let diaSemana = 6

if(diaSemana == 1){
    console.log('Lunes')
}else if(diaSemana == 2){
    console.log('Martes')
}else if (diaSemana == 3)  {
    console.log('Miercoles')
}else if(diaSemana == 4){
    console.log('Jueves')
}else if(diaSemana == 5){
    console.log('Viernes')
}else if(diaSemana == 6){
    console.log('Sabado')
}else if(diaSemana == 7){
    console.log('Domingo')
}else{
    console.log(`Dia de la semana incorrecto ${diaSemana}`)
}
    */

//Switch
let diaSemana = 99

switch(diaSemana){
    case 1: //dia semana = 1
    console.log('Lunes')
    break;
    case 2:
        console.log('Martes')
        break;
    case 3:
        console.log('Miercoles')
        break;
    case 4:
        console.log('Jueves')
        break;
    case 5:
        console.log('Viernes')
        break;
    case 6:
        console.log('Sabado')
        break;
    case 7:
        console.log('Domingo')
        break;
    default:
        console.log(`Dia de la semana incorrecto ${diaSemana}`)
}
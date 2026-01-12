let suma = function (a, b) {
    return a + b;
};
console.log(suma(5, 3));
// let sumaFlecha = (a:number, b:number)=>  a + b; Al tener solo una linea se puede omitir las llaves y el return
let sumaFlecha = (a, b) => {
    return a + b;
};
console.log(sumaFlecha(3, 3));
var obtenerNombre = function () {
    return "Juan Perez";
};
let obtenerNombreFlecha = () => "Juan Perez";
console.log(obtenerNombreFlecha());
export {};
//# sourceMappingURL=funcionesFelcha.js.map
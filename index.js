// Funciones como Tipo de Dato
var testFunction = function () {
    console.log('soy una funcion de prueba');
};
// testFunction = 10;
var anotherFunction = function () {
    console.log('soy otra funcion de prueba');
};
// Valores retornados por Funciones
var voidFunction = function () {
    console.log('soy una funcion que devuelve void');
};
// let a: number = voidFunction();
var twoPlusTwo = function () {
    return 2 + 2;
};
var b = twoPlusTwo();
// Pasando valores como parametros
var double = function (num) {
    return num * 2;
};
var c = double(2);
var d = double(6);
var e = double('webtoriales');
console.log(e);

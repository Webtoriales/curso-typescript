// Funciones como Tipo de Dato

let testFunction: Function = () => {
  console.log('soy una funcion de prueba')
}

// testFunction = 10;

let anotherFunction = () => {
  console.log('soy otra funcion de prueba')
}

// Valores retornados por Funciones

let voidFunction = () => {
  console.log('soy una funcion que devuelve void')
}
// let a: number = voidFunction();

let twoPlusTwo = () => {
  return 2 + 2;
}

let b = twoPlusTwo();

// Pasando valores como parametros

let double = (num: number) => {
  return num * 2;
}

let c = double(2);
let d = double(6);
// let e = double('webtoriales');
// console.log(e);

let concat = (a: string, b: string, reverse: boolean = false) => {
  if (reverse) {
    return b + a;
  }
  return a + b;
}

let result = concat('webtoriales', 'es genial');
const arr = [];

arr.push('hola mundo');
arr.push(2021);
arr.push({});

const numbers = [1, 2, 3];

numbers.push(4);
numbers.push(5);
// numbers.push('six');

const moreNumbers = [1, 'two', 3];

moreNumbers.push(4);
moreNumbers.push('five');
// moreNumbers.push(true);

const names = ['thor', 'wanda', 'tony'];

numbers.forEach(name => {
  console.log(name.toUpperCase());
});
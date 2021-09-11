var arr = [];
arr.push('hola mundo');
arr.push(2021);
arr.push({});
var numbers = [1, 2, 3];
numbers.push(4);
numbers.push(5);
// numbers.push('six');
var moreNumbers = [1, 'two', 3];
moreNumbers.push(4);
moreNumbers.push('five');
// moreNumbers.push(true);
var names = ['thor', 'wanda', 'tony'];
names.forEach(function (name) {
    console.log(name.toUpperCase());
});

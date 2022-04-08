let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// exercício 1

console.log('exercício1');

for (let number of numbers) {
  console.log (number);
}

// exercício 2

console.log('exercício 2');

let soma = 0;
for (let number of numbers) {
  soma += number;
}
console.log (soma)

// exercício 3

console.log ('exercício 3')

soma = 0;
for (let number of numbers) {
  soma += number;
}
let result = soma / numbers.length;

console.log (result);

// exercício 4

console.log('exercício 4');

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}

// exercício 5

console.log('exercício 5');

let graterNumber = 0;
for (number of numbers) {
  if (number > graterNumber){
    graterNumber = number;
  } 
}
console.log(graterNumber);

// exercício 6

console.log('exercício 6');

let counter = 0;
for (number of numbers){
  if ((number % 2) > 0){
    counter += 1;
  }else{
    'nenhum valor ímpar encontrado'
  }
}
console.log(counter);

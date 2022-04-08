let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// 1 - Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos com a função console.log() ;

console.log('>>exercício1');

for (let number of numbers) {
  console.log (number);
}

// 2 - Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

console.log('>>exercício 2');

let soma = 0;
for (let number of numbers) {
  soma += number;
}
console.log (soma)

// 3 - Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;

console.log ('>>exercício 3')

soma = 0;
for (let number of numbers) {
  soma += number;
}
let result = soma / numbers.length;

console.log (result);

// 4 - Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

console.log('>>exercício 4');

if (result > 20) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor que 20');
}

// 5 - Utilizando for , descubra qual o maior valor contido no array e imprima-o;

console.log('>>exercício 5');

let graterNumber = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
  if (numbers[index] > graterNumber){
    graterNumber = numbers[index];
  } 
}
console.log(graterNumber);

// 6 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";

console.log('>>exercício 6');

let counter = 0;
for (number of numbers){
  if ((number % 2) > 0){
    counter += 1;
  }else{
    'nenhum valor ímpar encontrado'
  }
}
console.log(counter);

// 7 - Utilizando for, descubra qual o menor valor contido no array e imprima-o;

console.log('>>exercício 7');

let smallerNumber = numbers[0];
for (let index = 1; index < numbers.length; index+=1) {
  if (numbers[index] < smallerNumber) {
    smallerNumber = numbers[index];
  }
}
console.log(smallerNumber);

// 8 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;

console.log('>>exercício 8');

let newArray = [];
for (let index = 1; index <= 25; index += 1){
  newArray.push(index);
}
console.log(newArray);

// 9 - Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

console.log('>>exercício 9')

for (let index = 0; index < newArray.length; index += 1) {
  console.log(newArray[index] * 2)
}
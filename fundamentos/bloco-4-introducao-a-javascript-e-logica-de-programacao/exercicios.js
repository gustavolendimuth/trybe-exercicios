// 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 4!;
console.log('exercicio 1');

let number = 4;
let fatorial = 1;
for (let index = 1; index <= number; index += 1) {
  fatorial = fatorial * index;
}
console.log(fatorial);

// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavra deste array e outro que retorne a menor. Considere o número de caracteres de cada palavra.

console.log('exercicio 2');

let arrayLanguage = ['java', 'javascript', 'python', 'html', 'css'];
let palavraMaior = 1
let palavra;
for (let index = 1; index < arrayLanguage.length; index += 1) {
  let tamanhoPalavra = arrayLanguage[index].length;
  if (tamanhoPalavra > palavraMaior) {
    palavraMaior = tamanhoPalavra;
    palavra = arrayLanguage[index];
  }
}
console.log(palavra);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

console.log('exercicio 4');

for (let index = 1; index <= 50; index += 1) {
  
}
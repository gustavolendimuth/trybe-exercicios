// 1 - O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
// O fatorial é representado pelo sinal !
// 4! = 4 x 3 x 2 x 1 = 24
// Com base nessas informações, crie um algoritmo que retorne o fatorial de 10.

// let fatorial = 4!;
console.log('--> exercicio 1');

let number = 10;
let fatorial = 1;
for (let index = 1; index <= number; index += 1) {
  fatorial = fatorial * index;
}
console.log(fatorial);

// 2- Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

console.log('--> exerciocio 2');

let word = 'tryber';
let palavraAoContrario = '';
for (let index = word.length; index > 0; index -= 1){
    let indiceDaLetra = index - 1;
    palavraAoContrario += word[indiceDaLetra];
}
console.log(palavraAoContrario);

// 3- Considere o array de strings abaixo:
// let array = ['java', 'javascript', 'python', 'html', 'css'];
// Escreva dois algoritmos: um que retorne a maior palavraMaior deste array e outro que retorne a menor. Considere o número de caracteres de cada palavraMaior.

console.log('--> exercicio 3');

let arrayLanguage = ['java', 'javascript', 'python', 'html', 'css'];
let tamanhoPalavraMaior = arrayLanguage[0].length;
let palavraMaior;

for (let index = 1; index < arrayLanguage.length; index += 1) {
  let tamanhoPalavra = arrayLanguage[index].length;
  if (tamanhoPalavra > tamanhoPalavraMaior) {
    tamanhoPalavraMaior = tamanhoPalavra;
    palavraMaior = arrayLanguage[index];
  }
}
console.log(palavraMaior);

let tamanhoPalavraMenor = arrayLanguage[0].length;
let palavraMenor;

for (let index = 1; index < arrayLanguage.length; index += 1) {
  let tamanhoPalavra = arrayLanguage[index].length;
  if (tamanhoPalavra < tamanhoPalavraMenor) {
    tamanhoPalavraMenor = tamanhoPalavra;
    palavraMenor = arrayLanguage[index];
  }
}

console.log(palavraMenor);

// 4- Um número primo é aquele divisível apenas por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que retorne o maior número primo entre 0 e 50.

console.log('--> exercicio 4');

let maiorNumeroPrimo;
let n = 50;

for (let index = 1; index <= n; index += 1) {
  let numeroDeMultiplicadores = 0;
  for (let ii = 1; ii <= index; ii +=1) {
    if (index % ii === 0) {
      numeroDeMultiplicadores += 1;
    }
  }
  if (numeroDeMultiplicadores === 2) {
    maiorNumeroPrimo = index;
  }
}
console.log(maiorNumeroPrimo);
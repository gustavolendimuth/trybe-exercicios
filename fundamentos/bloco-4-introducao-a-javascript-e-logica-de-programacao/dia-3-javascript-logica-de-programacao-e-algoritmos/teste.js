let word = 'teste';
let resultado="";
for (let index = word.length; index > 0; index -= 1){
    let indiceDaLetra = index - 1;
    resultado += word[indiceDaLetra];
}
console.log(resultado);
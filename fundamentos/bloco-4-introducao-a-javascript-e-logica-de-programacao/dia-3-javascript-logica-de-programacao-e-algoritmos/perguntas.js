let n = 10;

if (n>1) {
  
  let numeroEspacos = n;
  let numeroAsteriscos = 0;
  let linha = '';

  for (let index = 0; index < n; index += 1) {
    let asteriscos='';
    let espacos='';
    numeroEspacos -= 1;
    numeroAsteriscos += 1;

    for (let i = 0; i < numeroEspacos; i += 1){
      espacos += ' ';
    }

    for (let ii = 0; ii < numeroAsteriscos; ii += 1){
      asteriscos += '*';
    }

    linha = espacos + asteriscos;
    console.log(linha);
  }
}
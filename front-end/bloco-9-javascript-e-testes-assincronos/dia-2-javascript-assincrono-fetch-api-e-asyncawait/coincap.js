const requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const teste = (param) => {
  const div = document.getElementById('info');
  // div.innerText = param.data.name;
  param.reduce((acc, curr) => {
    if (curr.data.rank <= 10) {
      acc.push({ ...curr });
    }
    return acc;
  });
  console.log(param);
};

fetch('https://api.coincap.io/v2/assets/bitcoin', requestOptions)
  .then(response => response.json())
  .then(result => teste(result))
  .catch(error => console.log('error', error));

function tabuada() {
  let num = document.getElementById('numtxt');
  let res = document.getElementById('res');

  res.innerHTML = '';
  if (num.value.length == 0) {
    window.alert('[ERRO] Por favor, forneça um número.');
  } else {
    for (let i = 1; i <= 10; i++) {
      let item = document.createElement('option');
      item.text = `${num.value} x ${i} = ${num.value * i}`;
      item.value = `res${i}`;
      res.appendChild(item);
    }
  }
}

const numArray = [];
const num = document.getElementById('numtxt');

function adicionar() {
  let lista = document.getElementById('nlista');

  if (num.value < 1 || num.value > 100) {
    window.alert('Por favor, forneça um número entre 1 e 100');
  } else {
    numArray.push(num.value);
    numArray.sort(function (a, b) {
      return a - b;
    }); // ASCENDING NUMBERS
    let item = document.createElement('option');
    item.text = `valor ${num.value} adicionado`;
    lista.appendChild(item);
  }
}

function analisar() {
  if (num.value.length == 0) {
    window.alert('Forneça um número antes de finalizar');
  } else {
    let arraySum = 0;
    let arrayAvg = 0;

    for (let i in numArray) {
      arraySum += Number(numArray[i]);
    }

    arrayAvg += arraySum / numArray.length;

    let res = document.getElementById('res');
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo, temos ${numArray.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior valor informado foi ${numArray.pop()}.</p>`;
    res.innerHTML += `<p>O menor valor informado foi ${numArray.shift()}.</p>`;
    res.innerHTML += `<p>A soma de todos os elementos é ${arraySum}.</p>`;
    res.innerHTML += `<p>A média dos os elementos é ${arrayAvg.toFixed(
      2
    )}.</p>`;
  }
}

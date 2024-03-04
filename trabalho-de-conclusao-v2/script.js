let num = document.querySelector('input#numtxt');
let lista = document.querySelector('select#nlist');
let res = document.querySelector('div#res');
let numArray = [];

function isNumber(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true;
  } else {
    return false;
  }
}

function inList(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false;
  }
}

function analisar() {
  if (isNumber(num.value) && !inList(num.value, numArray)) {
    numArray.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `O valor ${num.value} foi adicionado`;
    lista.appendChild(item);
    res.innerHTML = '';
  } else {
    window.alert('Número invalido ou já encontrado na lista');
  }
  num.value = '';
  num.focus();
}

function finalizar() {
  let total = 0;
  let media = 0;
  let maior = numArray[0];
  let menor = numArray[0];

  for (let i in numArray) {
    if (numArray[i] > maior) {
      maior = numArray[i];
    } else if (numArray[i] < menor) {
      menor = numArray[i];
    }
  }

  for (let i in numArray) {
    total += numArray[i];
  }

  media += total / numArray.length;

  if (numArray.length == 0) {
    window.alert('Adicione um número antes de finalizar');
  } else {
    res.innerHTML = '';
    res.innerHTML += `<p>Ao todo temos ${numArray.length} números cadastrados.</p>`;
    res.innerHTML += `<p>O maior número cadastrado foi ${maior}.</p>`;
    res.innerHTML += `<p>O menor número cadastrado foi ${menor}.</p>`;
    res.innerHTML += `<p>A soma de todos os valores é ${total}.</p>`;
    res.innerHTML += `<p>A média dos valores é ${media}.</p>`;
  }
}

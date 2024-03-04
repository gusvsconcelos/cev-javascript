function contar() {
  let start = document.getElementById('inicio');
  let end = document.getElementById('fim');
  let step = document.getElementById('passo');
  let res = document.getElementById('res');

  if (start.value.length == 0 || end.value.length == 0) {
    window.alert('[ERRO] faltam dados');
  } else if (
    (start.value.length > 0 &&
      end.value.length > 0 &&
      step.value.length == 0) ||
    step.value == 0
  ) {
    step.value += '1';
    window.alert('O valor de [PASSO] não pode ser 0 ou vazio, considerando 1');
  } else {
    res.innerHTML = 'Contando:';
    let i = Number(start.value);
    let e = Number(end.value);
    let s = Number(step.value);

    for (let c = i; c <= e; c += s) {
      res.innerHTML += ` ${c} \u{1F449}`;
    }
    if (i > e) {
      for (let c = i; c >= e; c += -s) {
        res.innerHTML += ` ${c} \u{1F449}`;
      }
    }
    res.innerHTML += ` \u{1F3C1}`;
  }
}

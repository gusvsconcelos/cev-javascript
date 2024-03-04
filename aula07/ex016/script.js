function verificar() {
  var data = new Date();
  var ano = data.getFullYear();
  var fano = document.getElementById('txtano');
  var res = document.getElementById('res');

  if (fano.value.length == 0 || fano.value > ano) {
    window.alert('[ERRO] Verifique os dados e tente novamente!');
  } else {
    var fsex = document.getElementsByName('radsex');
    var idade = ano - Number(fano.value);
    var genero = '';
    var img = document.createElement('img');
    img.setAttribute('id', 'foto');
    if (fsex[0].checked) {
      genero = 'Homem';
      if (idade >= 0 && idade <= 10) {
        //criança
        img.setAttribute('src', 'images/fotocriancam.png');
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'images/fotojovemm.png');
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'images/fotoadultom.png');
      } else {
        //idoso
        img.setAttribute('src', 'images/fotoidosom.png');
      }
    } else if (fsex[1].checked) {
      genero = 'Mulher';
      if (idade >= 0 && idade <= 10) {
        //criança
        img.setAttribute('src', 'images/fotocriancaf.png');
      } else if (idade < 21) {
        //jovem
        img.setAttribute('src', 'images/fotojovemf.png');
      } else if (idade < 50) {
        //adulto
        img.setAttribute('src', 'images/fotoadultof.png');
      } else {
        //idoso
        img.setAttribute('src', 'images/fotoidosof.png');
      }
    }

    res.style.textAlign = 'center';
    res.innerHTML = `Detectamos ${genero} com ${idade} anos`;
    res.appendChild(img).style.marginTop = '16px';
  }
}

function carregar() {
  var msg = window.document.getElementById('msg');
  var img = window.document.getElementById('foto');
  var msg2 = window.document.getElementById('msg2');
  var data = new Date();
  var hora = data.getHours();

  msg.innerHTML = `Agora são ${hora} horas`;

  if (hora >= 6 && hora <= 12) {
    // BOM DIA
    img.src = 'images/imagemmanha.png';
    document.body.style.background = '#91c8eb';
    msg2.innerHTML = 'Bom dia';
  } else if (hora >= 13 && hora <= 18) {
    // BOA TARDE
    img.src = 'images/imagemtarde.png';
    document.body.style.background = '#e59f7a';
    msg2.innerHTML = 'Boa tarde';
  } else {
    // BOA NOITE
    img.src = 'images/imagemnoite.png';
    document.body.style.background = '#203e43';
    msg2.innerHTML = 'Boa noite';
  }
}

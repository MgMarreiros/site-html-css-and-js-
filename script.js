var slides = ['banner1.png', 'banner2.png', 'banner3.png', 'banner4.png']; 
var tam = slides.length;
var atual = 0;
var tmpslider;

function trocarAutomatica() {
  atual++;
  if (atual >= tam) {
    atual = 0;
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[atual]}')`;
}

function iniciarSlider() {
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[atual]}')`;
  tmpslider = setInterval(trocarAutomatica, 7000);
}

function parar() {
  clearInterval(tmpslider);
}

function troca(dir) {
  atual += dir;
  if (atual < 0) {
    atual = tam - 1;
  } else if (atual >= tam) {
    atual = 0;
  }
  document.querySelector('#dvSlider').style.backgroundImage = `url('${slides[atual]}')`;
  clearInterval(tmpslider);
}

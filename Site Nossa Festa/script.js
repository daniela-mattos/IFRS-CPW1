let slideIndex = 0;
const slides = document.getElementsByClassName("carousel-slide");

function showSlide() {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
  }
}

function changeSlide(n) {
  slideIndex += n;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  } else if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide();
}

setInterval(() => {
    changeSlide(1);
  }, 3000);

showSlide();


/*Botaõ WhatsApp*/
function sendToWhatsApp() {
  var name = document.getElementById('name').value;
  var date = document.getElementById('date').value;
  var message = document.getElementById('message').value;

  var url = 'https://wa.me/5551992537582?text=' + encodeURIComponent('Nome: ' + name + '\nData: ' + date + '\nMensagem: ' + message);

  window.open(url);
}

  

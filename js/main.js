// Hero Slider - Fade Effect
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides() {
  slides.forEach(slide => slide.classList.remove('active'));
  slideIndex++;
  if(slideIndex > slides.length) slideIndex = 1;
  slides[slideIndex - 1].classList.add('active');
  setTimeout(showSlides, 5000);
}
showSlides();

// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

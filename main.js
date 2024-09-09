// JavaScript for toggling mobile menu
document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  menuButton.addEventListener('click', () => {
    // Toggle the 'active' class to show/hide the menu
    navLinks.classList.toggle('active');
  });
});


// carousel
const carouselImages = document.querySelector('.carousel-images');
const images = document.querySelectorAll('.carousel-images img');
let currentIndex = 0;

function showNextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * 100;
    carouselImages.style.transform = `translateX(${offset}%)`;
}

setInterval(showNextImage, 6000);


document.querySelectorAll('details').forEach((detail) => {
  detail.addEventListener('toggle', function () {
    const content = this.querySelector('p');
    if (this.open) {
      content.style.maxHeight = content.scrollHeight + 'px';
    } else {
      content.style.maxHeight = '0';
    }
  });
});



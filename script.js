const hero = document.querySelector('.hero');
const backgrounds = [
  'url("assets/hero-ship.jpg")',
  'url("assets/hero-port.jpg")',
  'url("assets/hero-cargo.jpg")'
];
let current = 0;

setInterval(() => {
  current = (current + 1) % backgrounds.length;
  hero.style.backgroundImage = backgrounds[current];
}, 5000); // setiap 5 detik ganti gambar

  const images = [
    'assets/hero-ship.jpeg',
    'assets/hero-port.jpeg',
    'assets/hero-cargo.jpeg',
    'assets/hero-a.jpeg',
    'assets/hero-fa.jpeg'
  ];

  let currentIndex = 0;
  const heroElement = document.querySelector('.hero');

  function changeBackgroundImage() {
    currentIndex = (currentIndex + 1) % images.length; // Bergantian gambar
    heroElement.style.backgroundImage = `url(${images[currentIndex]})`;
  }

  setInterval(changeBackgroundImage, 5000); // Ganti gambar setiap 5 detik


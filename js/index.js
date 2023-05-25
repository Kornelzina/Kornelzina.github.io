$(document).ready(function(){
  $('.single-item').slick({
    autoplay: true,
    autoplaySpeed: 5000
  });
  $('.carousel').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000
  });
});
$(document).ready(function(){
  $('.testimonial-carousel').slick({
    dots: false,
    autoplay: true,
    autoplaySpeed: 5000,
    prevArrow:'',
    nextArrow:'',
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
});
const carousel = document.querySelector('.testimonial-carousel');
let isDown = false;
let startX;
let scrollLeft;

carousel.addEventListener('mousedown', (e) => {
  isDown = true;
  carousel.classList.add('active');
  startX = e.pageX - carousel.offsetLeft;
  scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mouseup', () => {
  isDown = false;
  carousel.classList.remove('active');
});

carousel.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - carousel.offsetLeft;
  const walk = (x - startX) * 3;
  carousel.scrollLeft = scrollLeft - walk;
});

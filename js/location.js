const carousel = document.querySelector('.carousel');
let lastTimestamp;

function animate(timestamp) {
  if (!lastTimestamp) {
    lastTimestamp = timestamp;
  }

  const timeElapsed = timestamp - lastTimestamp;
  const newScrollTop = carousel.scrollTop + (carousel.scrollHeight - carousel.scrollTop) * timeElapsed / 1000;
  const scrollRatio = newScrollTop / carousel.scrollHeight;

  carousel.scrollTop = newScrollTop;

  lastTimestamp = timestamp;

  if (scrollRatio === 1) {
    lastTimestamp = null;
    carousel.scrollTop = 0;
  }

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

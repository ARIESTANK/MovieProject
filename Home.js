const gallery = document.querySelector('.trilogy');
const imageWrappers = document.querySelectorAll('.image-wrapper');
let currentIndex = 1;

function moveToIndex(index) {
  const offset = -index * 100;
  gallery.style.transform = `translateX(${offset}%)`;
}

function swipeLeft() {
  currentIndex = (currentIndex - 1 + imageWrappers.length) % imageWrappers.length;
  moveToIndex(currentIndex);
}

function swipeRight() {
  currentIndex = (currentIndex + 1) % imageWrappers.length;
  moveToIndex(currentIndex);
}

setInterval(swipeRight, 3000); // Automatically swipe every 3 seconds (adjust as needed)

// Add touch event listeners for swiping on mobile devices
let startX = null;
gallery.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

gallery.addEventListener('touchend', (e) => {
  if (startX) {
    const endX = e.changedTouches[0].clientX;
    const deltaX = startX - endX;

    if (deltaX > 50) {
      swipeRight();
    } else if (deltaX < -50) {
      swipeLeft();
    }

    startX = null;
  }
});

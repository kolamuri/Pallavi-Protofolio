window.addEventListener('scroll', function() {
    const body = document.querySelector('body');
    const colors = ['color-1', 'color-2', 'color-3', 'color-4']; // Array of color classes
    const scrolled = window.scrollY > 0;
    const currentIndex = Math.floor(window.scrollY / 500) % colors.length; // Adjust scroll position threshold and division factor as needed
    body.classList = 'scroll-transition ' + colors[currentIndex];
  });
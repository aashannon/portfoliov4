window.addEventListener('scroll', function () {
    const scrollIndicator = document.querySelector('.scroll-down');
    if (window.scrollY > 100) {
      scrollIndicator.classList.add('hide');
    } else {
      scrollIndicator.classList.remove('hide');
    }
  });
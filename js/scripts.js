function toggleNav(icon) {
  icon.classList.toggle("active");
  const nav = document.getElementById("myNav");
  nav.classList.toggle("open");

  // Optional: prevent background scroll
  document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";
}



window.addEventListener('scroll', function () {
    const scrollIndicator = document.querySelector('.scroll-down');
    if (window.scrollY > 100) {
      scrollIndicator.classList.add('hide');
    } else {
      scrollIndicator.classList.remove('hide');
    }
  });
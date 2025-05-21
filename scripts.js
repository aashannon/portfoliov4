function toggleNav(icon) {
  icon.classList.toggle("active");
  const nav = document.getElementById("myNav");
  nav.classList.toggle("open");

  // Optional: prevent background scroll
  document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";
}

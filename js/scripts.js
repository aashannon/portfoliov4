function toggleNav(icon) {
  icon.classList.toggle("active");
  const nav = document.getElementById("myNav");
  nav.classList.toggle("open");

  // Optional: prevent background scroll
  document.body.style.overflow = nav.classList.contains("open") ? "hidden" : "auto";
}


document.addEventListener('DOMContentLoaded', function () {
  AOS.init({
    once: true,
    duration: 800,
    easing: 'ease-out-quart'
  });

  // Scroll to Top Button logic inside DOMContentLoaded
  const scrollToTopBtn = document.getElementById("scrollToTop");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 600) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});


// Konami Code Detection
const konamiCode = [
  "ArrowUp", "ArrowUp",
  "ArrowDown", "ArrowDown",
  "ArrowLeft", "ArrowRight",
  "ArrowLeft", "ArrowRight",
  "b", "a"
];

let konamiIndex = 0;

document.addEventListener("keydown", function (e) {
  if (e.key === konamiCode[konamiIndex]) {
    konamiIndex++;
    if (konamiIndex === konamiCode.length) {
      activateAaronUnleashedMode();
      konamiIndex = 0;
    }
  } else {
    konamiIndex = 0;
  }
});

// Easter Egg Function
function activateAaronUnleashedMode() {
  alert("🕹️ Aaron Unleashed Mode Activated!");

  // Tagline swap (optional)
  const tagline = document.querySelector(".main-hero h2");
  if (tagline) tagline.innerText = "UX Assassin: Silent. Strategic. Stylish.";

  // Optional style changes
  document.body.classList.add("aaron-unleashed");
}

const mobileKonamiCode = ["up", "up", "down", "down", "left", "right", "left", "right"];
let mobileIndex = 0;

["up", "down", "left", "right"].forEach(id => {
  document.getElementById("zone-" + id).addEventListener("click", () => {
    if (id === mobileKonamiCode[mobileIndex]) {
      mobileIndex++;
      if (mobileIndex === mobileKonamiCode.length) {
        activateAaronUnleashedMode(); // Reuse same function
        mobileIndex = 0;
      }
    } else {
      mobileIndex = 0;
    }
  });
});
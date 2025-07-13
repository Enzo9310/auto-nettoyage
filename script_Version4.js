// Animation d'apparition au scroll (fade-in on scroll)
function revealOnScroll() {
  const reveals = document.querySelectorAll(
    'section, .services-list li, .contact-form, footer'
  );
  for (let el of reveals) {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const elementVisible = 100; // px

    if (elementTop < windowHeight - elementVisible) {
      el.classList.add("visible");
    }
  }
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
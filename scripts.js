document.addEventListener("DOMContentLoaded", () => {
    // Scroll Animations for Sections
    const sections = document.querySelectorAll(".about-game, .blog");
    window.addEventListener("scroll", () => {
      sections.forEach(section => {
        if (isInViewport(section)) {
          section.classList.add("fadeIn");
        }
      });
    });
  
    // Check if element is in viewport
    function isInViewport(el) {
      const rect = el.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    }
  });
  
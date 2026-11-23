
const menuBtn = document.getElementById("menuBtn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
  });
});

// Typing animation
const words = ["Web Developer", "Frontend Developer", "Designer"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
  const element = document.getElementById("typing");
  const word = words[wordIndex];

  element.textContent = word.substring(0, charIndex);

  if (!deleting && charIndex < word.length) {
    charIndex++;
    setTimeout(typeEffect, 100);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeEffect, 50);
  } else {
    deleting = !deleting;

    if (!deleting) {
      wordIndex = (wordIndex + 1) % words.length;
    }

    setTimeout(typeEffect, 800);
  }
}

typeEffect();

// Contact form demo
document.getElementById("contactForm")
.addEventListener("submit", function(e) {
  e.preventDefault();

  document.getElementById("formMessage").textContent =
    "Thank you! Your message form was submitted locally.";

  this.reset();
});

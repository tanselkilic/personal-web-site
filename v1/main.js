// Typed text animation
const titles = [
  "Technology Executive",
  "Senior Full Stack Developer",
  "Fractional CTO",
  "Software Architect",
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedEl = document.querySelector(".typed-text");

function type() {
  const current = titles[titleIndex];
  if (isDeleting) {
    typedEl.textContent = current.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typedEl.textContent = current.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === current.length) {
    setTimeout(() => (isDeleting = true), 2000);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    titleIndex = (titleIndex + 1) % titles.length;
  }

  setTimeout(type, isDeleting ? 60 : 100);
}

type();

// Hamburger menu
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});

// Scroll fade-in
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("visible");
        observer.unobserve(e.target);
      }
    });
  },
  { threshold: 0.12 }
);

document
  .querySelectorAll(
    ".skill-category, .project-card, .about-text, .about-extras, .contact-card, .stat"
  )
  .forEach((el) => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

// Active nav highlight on scroll
const sections = document.querySelectorAll("section[id]");
const navItems = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((s) => {
    if (window.scrollY >= s.offsetTop - 120) current = s.id;
  });
  navItems.forEach((a) => {
    a.style.color = a.getAttribute("href") === `#${current}` ? "var(--text)" : "";
  });
});

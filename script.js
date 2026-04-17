const typingText = document.getElementById("typing");
const roles = [
  "Full Stack Developer",
  "Java Developer",
  "MERN Engineer",
  "Tech Enthusiast",
];
let i = 0,
  j = 0,
  del = false;

function type() {
  typingText.textContent = roles[i].substring(0, j);
  if (!del) j++;
  else j--;

  if (j === roles[i].length) del = true;
  if (j === 0 && del) {
    del = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, del ? 90 : 120);
}
type();

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(
      (e) => e.isIntersecting && e.target.classList.add("active"),
    );
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

// Auto-close mobile menu on link click
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

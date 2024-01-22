document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

let navLinks = document.getElementById("nav-links");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

const links = document.querySelectorAll("#nav-links a");

links.forEach((link) => {
  link.addEventListener("click", () => {
    hideMenu();
  });
});

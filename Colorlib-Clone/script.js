//sticky navbar
document.addEventListener("scroll", function () {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

// menu

let navLinks = document.getElementById("nav-links");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

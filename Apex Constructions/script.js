document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", scrollY > 0);
});

//hamburger
const menu = document.querySelector(".toggle");
const navbar = document.querySelector("nav ul");

menu.addEventListener("click", () => {
  navbar.classList.toggle("showmenu");
});

//after clicking on the link

let noOfLinks = document.querySelectorAll(".btn-link-a").length;

for (let i = 0; i <= noOfLinks; i++) {
  let btnLink = document.querySelectorAll(".btn-link-a")[i];
  btnLink.addEventListener("click", () => {
    navbar.classList.remove("showmenu");
  });
}

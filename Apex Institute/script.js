document.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//reveal elements

// window.addEventListener("scroll", reveal);

// function reveal() {
//   var reveals = document.querySelectorAll(".reveal");

//   for (var i = 0; i < reveals.length; i++) {
//     var windowHeight = window.innerHeight;
//     var revealTop = reveals[i].getBoundingClientRect().top;
//     var revealPoint = 200;

//     if (revealTop < windowHeight - revealPoint) {
//       reveals[i].classList.add("active");
//     } else {
//       reveals[i].classList.remove("active");
//     }
//   }
// }

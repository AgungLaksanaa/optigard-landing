const navToggler = document.getElementById("navToggler");
const navCollapse = document.getElementById("mainNavbar");

navToggler.addEventListener("click", function () {
  this.classList.toggle("active");
  navCollapse.classList.toggle("show");
});

// Close menu when clicking nav links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggler.classList.remove("active");
    navCollapse.classList.remove("show");
  });
});

// Close menu when clicking outside
document.addEventListener("click", function (event) {
  const isClickInside =
    navToggler.contains(event.target) || navCollapse.contains(event.target);

  if (!isClickInside && navCollapse.classList.contains("show")) {
    navToggler.classList.remove("active");
    navCollapse.classList.remove("show");
  }
});

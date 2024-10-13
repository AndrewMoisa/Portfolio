const menuToggle = document.querySelector(".tham");
const navLinksMobile = document.querySelector(".nav-links-mobile");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("tham-active");
  navLinksMobile.classList.toggle("hidden");
});

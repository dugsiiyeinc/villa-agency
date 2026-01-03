const hamburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".main-nav .nav-links");
const icons = hamburger.querySelectorAll("i");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    // XIR
    navLinks.classList.remove("open");
    navLinks.style.top = "-100%";

    icons[0].style.display = "block"; // bars
    icons[1].style.display = "none";  // close
  } else {
    // FUR
    navLinks.classList.add("open");
    navLinks.style.top = "0";

    icons[0].style.display = "none";  // bars
    icons[1].style.display = "block"; // close
  }
});

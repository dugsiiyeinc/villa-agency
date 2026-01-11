const hamburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".main-nav .nav-links");

if (hamburger && navLinks) {
  const icons = hamburger.querySelectorAll("i"); // [0]=bars, [1]=x

  // initial state
  icons[0].style.display = "block";
  icons[1].style.display = "none";
  navLinks.classList.remove("open");

  hamburger.addEventListener("click", () => {
    const isOpen = navLinks.classList.contains("open");

    if (isOpen) {
      navLinks.classList.remove("open");
      icons[0].style.display = "block";
      icons[1].style.display = "none";
    } else {
      navLinks.classList.add("open");
      icons[0].style.display = "none";
      icons[1].style.display = "block";
    }
  });
}

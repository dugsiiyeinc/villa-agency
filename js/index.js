const hamburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".main-nav .nav-links");
const icons = hamburger.querySelectorAll("i");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    // XIR
    navLinks.classList.remove("open");
    navLinks.style.top = "-800%";

    icons[0].style.display = "flex"; // bars
    icons[1].style.display = "none";  // close
  } else {
    // FUR
    navLinks.classList.add("open");
    navLinks.style.top = "0";

    icons[0].style.display = "none";  // bars
    icons[1].style.display = "flex"; // close
  }
});



const questions = document.querySelectorAll(".faq-question");

  questions.forEach(question => {
    question.addEventListener("click", () => {
      const item = question.parentElement;

      // xir kuwa kale
      document.querySelectorAll(".faq-item").forEach(faq => {
        if (faq !== item) {
          faq.classList.remove("active");
        }
      });

      // fur ama xir kan la riixay
      item.classList.toggle("active");
    });
  });  

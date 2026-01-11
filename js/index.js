const hamburger = document.querySelector(".humburger-menu");
const navLinks = document.querySelector(".main-nav .nav-links");
const icons = hamburger.querySelectorAll("i"); // [0]=bars, [1]=x

// ✅ set initial state (important)
icons[0].style.display = "block";
icons[1].style.display = "none";
navLinks.classList.remove("open");

hamburger.addEventListener("click", () => {
  const isOpen = navLinks.classList.contains("open");

  if (isOpen) {
    navLinks.classList.remove("open");
    icons[0].style.display = "block"; // bars
    icons[1].style.display = "none";  // x
  } else {
    navLinks.classList.add("open");
    icons[0].style.display = "none";  // bars
    icons[1].style.display = "block"; // x
  }
});

// FAQ accordion (unchanged)
const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const item = question.parentElement;

    document.querySelectorAll(".faq-item").forEach((faq) => {
      if (faq !== item) faq.classList.remove("active");
    });

    item.classList.toggle("active");
  });
});

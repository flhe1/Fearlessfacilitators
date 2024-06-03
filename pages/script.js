document.addEventListener("DOMContentLoaded", function () {
  // karrusel
  let currentIndex = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;
  const slideWidth = slides[0].offsetWidth;

  function movePrev() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    updateCarousel();
  }

  function moveNext() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateCarousel();
  }

  function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    document.querySelector(".carousel-images").style.transform = `translateX(${offset}px)`;
  }

  // Event listeners for arrow buttons
  document.querySelector(".prev").addEventListener("click", movePrev);
  document.querySelector(".next").addEventListener("click", moveNext);
});

// H1 og H2 scroll animation
document.addEventListener("DOMContentLoaded", function () {
  const animatedElements = document.querySelectorAll(".animated");

  function checkIfInView() {
    const triggerPoint = window.innerHeight * 0.8;

    animatedElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < triggerPoint) {
        if (element.tagName.toLowerCase() === "h1") {
          element.classList.add("slide-in-left");
        } else if (element.tagName.toLowerCase() === "h2") {
          element.classList.add("slide-in-right");
        }
      }
    });
  }

  window.addEventListener("scroll", checkIfInView);
  checkIfInView(); // Initial check in case elements are already in view
});

// grid img animation
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".grid_container img");

  function checkIfInView() {
    const triggerPoint = window.innerHeight / 2;

    images.forEach((image) => {
      const rect = image.getBoundingClientRect();
      const imageCenter = rect.top + rect.height / 2;

      if (imageCenter > triggerPoint - rect.height / 2 && imageCenter < triggerPoint + rect.height / 2) {
        image.classList.add("size-up");
      } else {
        image.classList.remove("size-up");
      }
    });
  }

  window.addEventListener("scroll", checkIfInView);
  checkIfInView(); // Initial check in case elements are already in view
});

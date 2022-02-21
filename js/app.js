// Buttons
const buttons = document.querySelectorAll(".btn");
buttons.forEach((item) => {
  item.addEventListener("click", (e) => {
    buttons.forEach((el) => {
      el.classList.remove("active");
    });
    item.classList.add("active");
  });
});

// Particles Library for background
window.onload = function () {
  Particles.init({
    selector: ".background",
    maxParticles: 500,
    responsive: [
      {
        breakpoint: 768,
        options: {
          maxParticles: 250,
        },
      },
      {
        breakpoint: 425,
        options: {
          maxParticles: 100,
        },
      },
      {
        breakpoint: 320,
        options: {
          maxParticles: 50,
        },
      },
    ],
  });
};

const circonferenza = document.querySelectorAll("[data-logo]");

circonferenza.forEach((circonferenza) => {
  circonferenza.addEventListener("click", () => {
    circonferenza.classList.toggle("active");
  });
});


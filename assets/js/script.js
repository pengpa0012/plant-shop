const frontPlants = document.querySelectorAll(".front-plant");

window.addEventListener("scroll", () => {
  let y = window.scrollY;

  let counter = 0.4;
  frontPlants.forEach((plant) => {
    plant.style.bottom = (-y - 70) * counter + "px";
    counter += 0.2;
  });
});

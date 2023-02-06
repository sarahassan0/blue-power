const filtersBtns = document.querySelectorAll("#latest-projects [data-filter]");
const projects = document.querySelectorAll("#latest-projects [data-cat]");

function filterClickHandler(e) {
  const clickedBtn = e.target;

  const filter = clickedBtn.getAttribute("data-filter");

  const relatedProjects = document.querySelectorAll(
    `#latest-projects [data-cat="${filter}"]`
  );

  if (filter === "all")
    return projects.forEach(function (project) {
      project.classList.remove("hide");
    });

  projects.forEach(function (project) {
    project.classList.add("hide");
  });

  relatedProjects.forEach(function (project) {
    project.classList.remove("hide");
  });
}

filtersBtns.forEach(function (btn) {
  btn.addEventListener("click", filterClickHandler);
});

// Swiper / Carousel
const swiper = new Swiper(".swiper", {
  loop: true,

  slidesPerView: 6,
  spaceBetween: 10,

  autoplay: {
    delay: 3000,
  },
});

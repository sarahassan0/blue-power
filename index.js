const navLinks = document.querySelectorAll(".nav-link");

function navClickHandler(e) {
  const clickedBtn = e.target;

  navLinks.forEach((btn) => {
    btn.classList.remove("active");
  });

  clickedBtn.classList.add("active");
}

navLinks.forEach(function (link) {
  link.addEventListener("click", navClickHandler);
});

const filtersBtns = document.querySelectorAll("#latest-projects [data-filter]");
const projects = document.querySelectorAll("#latest-projects [data-cat]");

function filterClickHandler(e) {
  const clickedBtn = e.target;
  const filter = clickedBtn.getAttribute("data-filter");

  filtersBtns.forEach((btn) => {
    btn.classList.remove("active");
  });

  clickedBtn.classList.add("active");
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

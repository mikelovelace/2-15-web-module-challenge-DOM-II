import './less/index.less'

// links container
const navContainer = document.querySelector("nav")
navContainer.addEventListener("dblclick", () => {
    navContainer.style.background = "gray"
})

// links
const navLinks = document.querySelectorAll(".nav-link");
navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.backgroundColor = "orange";
      //Prevent Default
  link.addEventListener("click", e => {
    e.preventDefault();
  });
})
  });


  // logo
  const logoHeading = document.querySelector(".logo-heading")
  window.addEventListener("load", () => {
    logoHeading.style.color = "orange"
    logoHeading.textContent = "I hate Fun Bus"
  })

  // hero
  const hero = document.querySelector(".intro img")
  hero.addEventListener("mouseenter", () => {
    hero.style.filter = "grayscale(100%)"
  })
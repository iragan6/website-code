let bars = document.querySelector(".bars");
let items = document.querySelector(".navItems");

document.querySelector("video").playbackRate = 0.5;

bars.addEventListener("click", function() {
  bars.classList.toggle("active");
  items.classList.toggle("active");
});

let home = document.querySelector(".navItems>li");
home.addEventListener("click", function() {
  document.getElementById("main").scrollIntoView({
    behavior: "smooth"
  });
});
let skill = document.querySelector(".navItems li:nth-of-type(2)");
skill.addEventListener("click", function() {
  document.getElementById("skills").scrollIntoView({
    behavior: "smooth"
  });
});
let project = document.querySelector(".navItems li:nth-of-type(3)");
project.addEventListener("click", function() {
  document.getElementById("projects").scrollIntoView({
    behavior: "smooth"
  });
});
let contact = document.querySelector(".navItems li:nth-of-type(4)");
contact.addEventListener("click", function() {
  document.getElementById("contact").scrollIntoView({
    behavior: "smooth"
  });
});

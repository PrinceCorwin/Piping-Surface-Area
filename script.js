const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  links.forEach((link) => {
    link.classList.toggle("fade");
  });
});
// event listener for help and hide images buttons
let imgVisibility = "show";
$("#help-btn").click(function () {
  $("#help").toggle();
});
$(".fa-times-circle").click(function () {
  $("#help").toggle();
});
$("#hide-btn").click(function () {
  if (imgVisibility === "show") {
    $("#hide-btn-txt").text("Show Images");
    imgVisibility = "hide";
  } else {
    $("#hide-btn-txt").text("Hide Images");
    imgVisibility = "show";
  }
  $(".pipe-img").toggle();
});

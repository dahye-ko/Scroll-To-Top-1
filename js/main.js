const $scrollToTop = document.querySelector(".scrollToTop");

$scrollToTop.addEventListener("click", function () {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

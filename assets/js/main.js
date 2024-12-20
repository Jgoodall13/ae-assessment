$(document).ready(() => {
  const $searchBtn = $(".navbar__search-link-container");
  $searchBtn.click(() => {
    $(".navbar__search").toggleClass("active");
  });

  $(".navbar__hamburger-link-container").click(() => {
    console.log("clicked");
    $(".navbar__menu").toggle("slow");
  });

  $(".navbar__mobile-close-btn").click(() => {
    $(".navbar__menu").toggle("slow");
  });

  $(".expander").click(function () {
    let imgChildren = $(this).children();
    imgChildren.toggleClass("non-active");

    let list = $(this).closest(".footer__nav-list-item").find("ul");
    list.toggleClass("non-active");
  });
});

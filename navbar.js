var navmenu = $(".screen-nav-menu");
var barbtn = $(".bar-icon");
var closebtn = $(".close-icon");
var container = $(".container");
var toggleclose = false;
var togglebar = true;

function shownav() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
  navmenu.css("display", "block");
  container.css("display", "none");
  navmenu.css("transform", "scaleX(1)");
  closebtn.css("visibility", "visible");
  barbtn.css("visibility", "hidden");
}

function hidenav() {
  navmenu.css("display", "none");
  container.css("display", "flex");
  navmenu.css("transform", "scaleX(0)");
  closebtn.css("visibility", "hidden");
  barbtn.css("visibility", "visible");
}

window.onresize = function () {
  // Setting the current height & width
  // to the elements
  // console.log(screen.width);
  if (screen.width >= 1081) {
    hidenav();
  } else if (screen.width > 1050) {
    console.log("called");
    $(".screen-filter-container").css("display", "none");
    $(".screen-nav").css("display", "none");
  } else if (screen.width <= 1050) {
    $(".screen-nav").css("display", "flex");
  }
};